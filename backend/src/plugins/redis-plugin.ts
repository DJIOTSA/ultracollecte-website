import { Plugin } from 'payload'
import Redis from 'ioredis'

declare global {
  var redisClient: Redis | undefined
  var pubsub:
    | {
        pub: Redis
        sub: Redis
      }
    | undefined
}

interface RedisPluginOptions {
  redisUrl?: string
}

export const getPubsub = ({ redisUrl: uri }: RedisPluginOptions) => {
  const redisUrl = uri || process.env.REDIS_URL!
  if (!global.pubsub) {
    global.pubsub = {
      pub: new Redis(redisUrl, {
        connectTimeout: 5000,
        maxRetriesPerRequest: 3,
        enableOfflineQueue: false,
        lazyConnect: true,
      }),
      sub: new Redis(redisUrl, {
        connectTimeout: 5000,
        maxRetriesPerRequest: 3,
        enableOfflineQueue: false,
        lazyConnect: true,
      }),
    }
  }
  return global.pubsub
}
export const getRedisClient = ({ redisUrl: uri }: RedisPluginOptions): Redis => {
  const redisUrl = uri || process.env.REDIS_URL!
  if (!global.redisClient) {
    if (!redisUrl) throw new Error('REDIS_URL is missing.')

    global.redisClient = new Redis(redisUrl, {
      connectTimeout: 5000,
      maxRetriesPerRequest: 3,
      enableOfflineQueue: false,
      lazyConnect: true,
    })

    global.redisClient.connect().catch((err) => {
      console.error('Redis connection error:', err)
    })

    global.redisClient.on('error', (err) => {
      console.error('Redis error:', err)
    })

    process.on('exit', () => {
      if (global.redisClient) {
        global.redisClient.quit()
      }
    })
  }
  return global.redisClient
}

export const redisCachePlugin = ({ redisUrl }: RedisPluginOptions): Plugin => {
  const redis = getRedisClient({ redisUrl })

  return (incomingConfig) => {
    const enhancedCollections = (incomingConfig.collections || []).map((collection) => ({
      ...collection,
    }))

    return {
      ...incomingConfig,
      collections: enhancedCollections,
      onInit: async (payload) => {
        try {
          await redis.ping()
          payload.logger.info('✅ Connected to Redis')
        } catch (err) {
          payload.logger.error('❌ Redis connection failed')
        }

        if (incomingConfig.onInit) {
          await incomingConfig.onInit(payload)
        }
      },
    }
  }
}
