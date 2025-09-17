import { Microfinance } from '@/payload-types'
import { CollectionBeforeChangeHook, Forbidden } from 'payload'

export const validateMembership: CollectionBeforeChangeHook = async ({ data, req, operation }) => {
  const membership = data?.membership
  if (operation === 'update' || !membership) {
    return data
  }
  const resp = await req.payload.find({
    collection: 'memberships',
    where: {
      id: {
        equals: membership,
      },
      microfinance: {
        equals: data?.microfinance,
      },
    },
    depth: 1,
    limit: 1,
  })
  const membershipData = resp.docs[0]

  if (!membershipData) {
    throw new Forbidden(() => `Membership ${membership} not found`)
  }
  if (membershipData.status !== 'active') {
    throw new Forbidden(() => `User ${membershipData.name} is not active`)
  }
  if ((membershipData.microfinance as Microfinance).status !== 'active') {
    throw new Forbidden(
      () => `Microfinance ${(membershipData.microfinance as Microfinance).name} is not active`,
    )
  }
  return data
}
