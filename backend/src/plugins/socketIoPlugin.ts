import { CollectionSlug } from 'payload'
import { Socket, Server as SocketIOServer } from 'socket.io'
import { createServer } from 'http'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, Config, Payload } from 'payload'

interface PluginOptions {
  port?: number
  collections?: CollectionSlug[]
  channelField?: string
  cors?: CorsOptions
}

type CorsOptions = {
  origin?: string | string[]
  methods?: string[]
}

type DocumentChangedMessage = {
  type: 'DOCUMENT_CHANGED'
  collection: CollectionSlug
  operation: 'create' | 'update' | 'delete'
  doc: any
  room: string
}

let io: SocketIOServer
const socketRooms = new Map<string, string>() // socketId -> room

export const socketIORealtimePlugin =
  (options: PluginOptions = {}) =>
  (config: Config): Config => {
    const modifiedConfig = { ...config }
    const targetCollections = options.collections || []
    const port = options.port || 8081
    const channelField = options.channelField || 'channel'
    const corsOptions = options.cors || {
      origin: '*',
      methods: ['GET', 'POST'],
    }

    modifiedConfig.collections = (modifiedConfig.collections || []).map((collection) => {
      if (!targetCollections.includes(collection.slug as any)) return collection

      return {
        ...collection,
        hooks: {
          ...collection.hooks,
          afterDelete: [
            ...(collection.hooks?.afterDelete || []),
            createDeleteHandler(collection.slug as any, channelField),
          ],
          afterChange: [
            ...(collection.hooks?.afterChange || []),
            createChangeHandler(collection.slug as any, channelField),
          ],
        },
      }
    })

    modifiedConfig.onInit = async (payload) => {
      if (config.onInit) await config.onInit(payload)
      initializeSocketIOServer(port, payload, corsOptions)
    }

    return modifiedConfig
  }

function createDeleteHandler(slug: CollectionSlug, channelField: string) {
  return (async ({ doc }) => {
    if (!io || !doc[channelField]) return

    broadcastDocumentMessage({
      type: 'DOCUMENT_CHANGED',
      collection: slug,
      operation: 'delete',
      doc,
      room: doc[channelField],
    })
  }) as CollectionAfterDeleteHook
}

function createChangeHandler(slug: CollectionSlug, channelField: string) {
  return (async ({ doc, operation, req }: any) => {
    req.payload.logger.debug(
      `Document ${doc.id} changed in collection ${slug} with operation ${operation}`,
    )
    if (!io || !doc[channelField]) return doc

    broadcastDocumentMessage({
      type: 'DOCUMENT_CHANGED',
      collection: slug,
      operation,
      doc,
      room: doc[channelField],
    })

    return doc
  }) as CollectionAfterChangeHook
}

function initializeSocketIOServer(port: number, payload: Payload, corsOptions: CorsOptions) {
  const httpServer = createServer()

  io = new SocketIOServer(httpServer, {
    cors: {
      ...corsOptions,
    },
    transports: ['websocket', 'polling'],
  })

  io.on('connection', (socket) => {
    payload.logger.info(`✅ Socket.IO client connected: ${socket.id}`)

    socket.emit('connected', { id: socket.id })

    // Événement direct pour rejoindre une room
    socket.on('join_room', async (room: string) => {
      await handleJoinRoom(socket, room, payload)
    })

    // Événement direct pour quitter une room
    socket.on('leave_room', (room: string) => {
      handleLeaveRoom(socket, room, payload)
    })

    // Événement pour récupérer des données de collection
    socket.on(
      'fetch_collection',
      async (params: { collection: string; where?: Record<string, any>; limit?: number }) => {
        await handleFetchCollection(socket, params, payload)
      },
    )

    socket.on('disconnect', () => {
      payload.logger.info(`Socket.IO client disconnected: ${socket.id}`)
      handleDisconnect(socket, payload)
    })
  })

  httpServer.listen(port, () => {
    payload.logger.info(`Socket.IO server listening on port ${port}`)
  })
}

async function handleJoinRoom(socket: Socket, room: string, payload: Payload) {
  try {
    payload.logger.info(`Client ${socket.id} attempting to join room ${room}`)

    if (!socket || !room || typeof room !== 'string') {
      payload.logger.error(`Invalid join room request: socket=${!!socket}, room=${room}`)
      socket.emit('error', { message: 'Invalid room or socket' })
      return
    }

    // Quitter l'ancienne room si elle existe
    const currentRoom = socketRooms.get(socket.id)
    if (currentRoom && currentRoom !== room) {
      socket.leave(currentRoom)
      socket.to(currentRoom).emit('user_left', {
        message: `User left the room: ${socket.id}`,
        id: socket.id,
      })
      payload.logger.info(`Client ${socket.id} left previous room ${currentRoom}`)
    }

    // Rejoindre la nouvelle room
    await socket.join(room)
    socketRooms.set(socket.id, room)

    payload.logger.info(`✅ Client ${socket.id} successfully joined room ${room}`)

    // Émettre l'événement user_joined à tous les autres clients de la room
    socket.to(room).emit('user_joined', {
      message: `New user joined the room: ${socket.id}`,
      id: socket.id,
    })

    // Confirmer la jointure au client
    socket.emit('room_joined', { room, id: socket.id })
  } catch (error) {
    payload.logger.error(`Error joining room ${room}:`, error)
    socket.emit('error', { message: 'Failed to join room' })
  }
}

function handleLeaveRoom(socket: Socket, room: string, payload: Payload) {
  try {
    if (!socket || !room) {
      payload.logger.error('Invalid leave room request')
      return
    }

    socket.leave(room)

    // Retirer de la map si c'est la room actuelle
    const currentRoom = socketRooms.get(socket.id)
    if (currentRoom === room) {
      socketRooms.delete(socket.id)
    }

    payload.logger.info(`Client ${socket.id} left room ${room}`)

    socket.to(room).emit('user_left', {
      message: `User left the room: ${socket.id}`,
      id: socket.id,
    })

    socket.emit('room_left', { room, id: socket.id })
  } catch (error) {
    payload.logger.error(`Error leaving room ${room}:`, error)
  }
}

function handleDisconnect(socket: Socket, payload: Payload) {
  try {
    const room = socketRooms.get(socket.id)
    if (room) {
      socket.to(room).emit('user_left', {
        message: `User left the chat: ${socket.id}`,
        id: socket.id,
      })
      socketRooms.delete(socket.id)
      payload.logger.info(`Client ${socket.id} disconnected from room ${room}`)
    }
  } catch (error) {
    payload.logger.error('Error handling disconnect:', error)
  }
}

async function handleFetchCollection(
  socket: Socket,
  params: { collection: string; where?: Record<string, any>; limit?: number },
  payload: Payload,
) {
  try {
    const { collection, where = {}, limit = 10 } = params

    payload.logger.info(`Fetching collection ${collection} for client ${socket.id}`)

    const result = await payload.find({
      collection: collection as CollectionSlug,
      where,
      limit,
    })

    socket.emit('collection_data', {
      collection,
      data: result,
    })
  } catch (error) {
    payload.logger.error(`Error fetching collection ${params.collection}:`, error)
    socket.emit('error', { message: 'Failed to fetch collection' })
  }
}

function broadcastDocumentMessage(message: DocumentChangedMessage) {
  if (!io) return

  // Envoyer le message à tous les clients dans la room
  io.to(message.room).emit('document_changed', message)
}
