import { CollectionSlug } from 'payload'
import ws, { WebSocketServer } from 'ws'
import type { Config } from 'payload'
import crypto from 'crypto'

const uid = () => crypto.randomBytes(14).toString('hex')
/**
 * Configuration options for the WebSocket plugin
 */
interface PluginTypes {
  /** Port number for the WebSocket server. Defaults to 8081 */
  port?: number
  /** Array of collection slugs to watch for changes */
  collections?: CollectionSlug[]
}

/** Global WebSocket server instance */
let wss: WebSocketServer
/**
 * Payload CMS plugin that adds real-time functionality through WebSockets
 *
 * @param pluginOptions - Configuration options for the WebSocket server
 * @returns A Payload plugin that sets up WebSocket server and collection hooks
 *
 * @example
 * ```typescript
 * // In payload.config.ts
 * export default buildConfig({
 *   plugins: [
 *     websocketServerPlugin({
 *       collections: ['todos'],
 *       port: 8081
 *     })
 *   ]
 * })
 * ```
 */
export const websocketServerPlugin =
  (pluginOptions: PluginTypes = {}) =>
    (incomingConfig: Config): Config => {
      const config = { ...incomingConfig }

      if (pluginOptions.collections) {
        config.collections = (config.collections || []).map((collection) => {
          if (!pluginOptions.collections?.includes(collection.slug as any)) return collection

          return {
            ...collection,
            hooks: {
              ...collection.hooks,
              /**
               * Hook that runs after a document is deleted
               * Broadcasts the deletion to all connected WebSocket clients
               */
              afterDelete: [
                ...(collection.hooks?.afterDelete || []),
                async ({ doc }) => {
                  if (wss) {
                    const message = JSON.stringify({
                      type: 'COLLECTION_CHANGED',
                      collection: collection.slug,
                      uid: uid(),
                      operation: 'delete',
                      doc,
                    })
                    wss.clients.forEach((client) => {
                      if (client.readyState === ws.OPEN) {
                        client.send(message)
                      }
                    })
                  }
                },
              ],
              /**
               * Hook that runs after a document is changed (created/updated)
               * Broadcasts the change to all connected WebSocket clients
               */
              afterChange: [
                ...(collection.hooks?.afterChange || []),
                async ({ doc, operation, req }) => {
                  if (wss) {
                    console.log(`[WS PLUGIN] Broadcasting ${operation} on ${collection.slug}`)
                    const message = JSON.stringify({
                      type: 'COLLECTION_CHANGED',
                      collection: collection.slug,
                      uid: uid(),
                      operation,
                      doc,
                    })

                    wss.clients.forEach((client) => {
                      if (client.readyState === ws.OPEN) {
                        client.send(message)
                      }
                    })
                  }
                  return doc
                },
              ],
            },
          }
        })
      }

      /**
       * Initializes the WebSocket server when Payload starts
       * Sets up message handling for collection data requests
       */
      config.onInit = async (payload) => {
        if (incomingConfig.onInit) await incomingConfig.onInit(payload)

        wss = new WebSocketServer({ host: '0.0.0.0', port: pluginOptions.port })

        wss.on('connection', (ws) => {
          ws.on('message', async (message) => {
            try {
              const data = JSON.parse(message.toString())

              switch (data.type) {
                case 'FETCH_COLLECTION':
                  const results = await payload.find({
                    collection: data.collection,
                    depth: 0,
                    limit: data.limit || 10,
                  })
                  ws.send(JSON.stringify({ type: 'COLLECTION_DATA', data: results, uid: uid() }))
                  break
              }
            } catch (error) {
              console.error('WebSocket error:', error)
            }
          })
        })
        payload.logger.info(`✅ ✅ WebSocket server initialized on port ${pluginOptions.port}`)
      }

      return config
    }
