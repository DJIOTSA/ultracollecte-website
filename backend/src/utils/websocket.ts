import { CollectionSlug } from 'payload'
import ws, { WebSocket, WebSocketServer } from 'ws'
import type { Config, Payload } from 'payload'

interface PluginOptions {
  port?: number
  collections?: string[]
  channelField?: string
}

let wss: WebSocketServer
const channelSubscriptions = new Map<string, Set<WebSocket>>()
const clientSubscriptions = new Map<WebSocket, string>()

export const websocketServerPlugin =
  (options: PluginOptions = {}) =>
    (config: Config): Config => {
      const modifiedConfig = { ...config }
      const targetCollections = options.collections || []
      const port = options.port || 8081
      const channelField = options.channelField || 'channel'

      modifiedConfig.collections = (modifiedConfig.collections || []).map((collection) => {
        if (!targetCollections.includes(collection.slug)) return collection

        return {
          ...collection,
          hooks: {
            ...collection.hooks,
            afterDelete: [createDeleteHandler(collection.slug, channelField)],
            afterChange: [createChangeHandler(collection.slug as any, channelField)],
          },
        }
      })

      modifiedConfig.onInit = async (payload) => {
        if (config.onInit) await config.onInit(payload)
        initializeWebSocketServer(port, payload)
      }

      return modifiedConfig
    }

function createDeleteHandler(slug: string, channelField: string) {
  return async ({ doc }: { doc: any }) => {
    if (!wss || !doc[channelField]) return

    const message = JSON.stringify({
      type: 'DOCUMENT_CHANGED',
      collection: slug,
      operation: 'delete',
      doc,
    })

    broadcastToChannel(doc[channelField], message)
  }
}

function createChangeHandler(slug: CollectionSlug, channelField: string) {
  return async ({ doc, operation, req }: any) => {
    if (!wss || !doc[channelField]) return doc

    const populatedDoc = await req.payload.find({
      collection: slug,
      where: { id: { equals: doc.id } },
      depth: 2,
    })

    const fullDoc = populatedDoc.docs[0]
    if (!fullDoc || !fullDoc[channelField]) return doc

    const message = JSON.stringify({
      type: 'DOCUMENT_CHANGED',
      collection: slug,
      operation,
      doc: fullDoc,
    })

    broadcastToChannel(fullDoc[channelField], message)
    return doc
  }
}

function initializeWebSocketServer(port: number, payload: Payload) {
  wss = new WebSocketServer({ port })

  wss.on('connection', (ws) => {
    ws.on('message', async (data) => {
      try {
        const message = JSON.parse(data.toString())

        switch (message.type) {
          case 'SUBSCRIBE':
            // Changement clé: "channel" au singulier
            if (typeof message.channel === 'string') {
              handleSubscription(ws, message.channel)
            }
            break
          case 'UNSUBSCRIBE':
            handleUnsubscribe(ws)
            break
          case 'FETCH_COLLECTION':
            const results = await payload.find({
              collection: message.collection,
              depth: 2,
              limit: message.limit || 10,
            })
            ws.send(JSON.stringify({ type: 'COLLECTION_DATA', data: results }))
            break
        }
      } catch (error) {
        console.error('WebSocket error:', error)
      }
    })

    ws.on('close', () => handleUnsubscribe(ws))
  })
}

function handleSubscription(ws: WebSocket, channel: string) {
  handleUnsubscribe(ws)

  if (!channelSubscriptions.has(channel)) {
    channelSubscriptions.set(channel, new Set())
  }
  channelSubscriptions.get(channel)?.add(ws)
  clientSubscriptions.set(ws, channel)
}

function handleUnsubscribe(ws: WebSocket) {
  const currentChannel = clientSubscriptions.get(ws)
  if (!currentChannel) return

  const subscribers = channelSubscriptions.get(currentChannel)
  if (subscribers) {
    subscribers.delete(ws)
    if (subscribers.size === 0) {
      channelSubscriptions.delete(currentChannel)
    }
  }
  clientSubscriptions.delete(ws)
}

function broadcastToChannel(channel: string, message: string) {
  const subscribers = channelSubscriptions.get(channel)
  subscribers?.forEach((client) => {
    if (client.readyState === ws.OPEN) {
      client.send(message)
    }
  })
}
