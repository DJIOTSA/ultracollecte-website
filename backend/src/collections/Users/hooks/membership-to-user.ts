import { User } from '@/payload-types'
import { CollectionAfterLoginHook } from 'payload'
import { getRedisClient } from '@/plugins/redis-plugin'
import { getUserProfiles } from '../utils/user-profiles'

export const membershipToUserAfterLogin: CollectionAfterLoginHook<User> = async ({ req, user }) => {
  const profiles = await getUserProfiles({ req, userId: user.id })
  const redisClient = getRedisClient({})
  await redisClient.set(`${user.id}:profiles`, JSON.stringify(profiles), 'EX', 60 * 60 * 24 * 30)
  return user
}
