import { Payload } from 'payload'

export const expireSubscriptions = async ({ payload }: { payload: Payload }) => {
  const now = new Date().toISOString()
  const { docs } = await payload.find({
    collection: 'subscriptions',
    where: {
      endDate: {
        less_than: now,
      },
      status: {
        equals: 'active',
      },
    },
  })

  for (const subscription of docs) {
    await payload.update({
      collection: 'subscriptions',
      id: subscription.id,
      data: {
        status: 'expired',
      },
    })
  }
  return {
    output: `${docs.length} subscriptions expired`,
  }
}
