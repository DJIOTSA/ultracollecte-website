import { CompanyProfilesObject } from '@/access/types'
import { PayloadRequest } from 'payload'

export const getUserProfiles = async ({ req, userId }: { req: PayloadRequest; userId: string }) => {
  const membership = await req.payload.find({
    collection: 'memberships',
    where: { user: { equals: userId }, status: { equals: 'active' } },
    depth: 0,
    limit: 0,
  })

  const profiles = membership.docs.reduce((acc, doc) => {
    if (typeof doc.microfinance !== 'string') return acc
    acc[doc.microfinance] = {
      microfinance: doc.microfinance,
      role: doc.role,
      status: doc.status,
    }
    return acc
  }, {} as CompanyProfilesObject)

  return profiles
}
