import type { Access } from 'payload'
import { CompanyProfilesObject } from './types'
import { getRedisClient } from '@/plugins/redis-plugin'
import { getUserProfiles } from '@/collections/Users/utils/user-profiles'

export const isAuth: Access = async ({ req }) => {
  if (!req.user) return false
  if (req.user.collection === 'admins') return true
  if (process.env.ROW_LEVEL_SECURITY !== 'true') return true
  const user = req.user
  const redisClient = getRedisClient({})
  const companyProfilesStr = await redisClient.get(`${user.id}:profiles`)
  let companyProfiles = companyProfilesStr
    ? (JSON.parse(companyProfilesStr) as CompanyProfilesObject)
    : null
  if (!companyProfiles) {
    console.log('Fetching company profiles...')
    companyProfiles = (await getUserProfiles({ req, userId: user.id })) || {}
    redisClient.set(`${user.id}:profiles`, JSON.stringify(companyProfiles), 'EX', 60 * 60 * 24 * 30)
  } else {
    console.log('Using cached company profiles...')
  }
  const profilesArray = Object.values(companyProfiles)
  return {
    and: [
      {
        microfinance: {
          in: profilesArray.map((profile) => profile.microfinance + '').join(','),
        },
      },
    ],
  }
}
