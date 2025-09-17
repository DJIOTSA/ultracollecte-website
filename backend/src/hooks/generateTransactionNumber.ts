import type { CollectionBeforeChangeHook } from 'payload'

export const generateTransactionNumber: CollectionBeforeChangeHook = async ({
  data,
  operation,
  req: { payload },
}) => {
  if (operation === 'create') {
    const now = new Date(data?.date || Date.now())
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')

    const counters = await payload.find({
      collection: 'counters',
      limit: 1,
      where: { name: { equals: 'transactions' } },
    })

    let lastNumber = 1
    if (counters.docs.length > 0) {
      lastNumber = counters.docs[0].value + 1
      await payload.update({
        collection: 'counters',
        id: counters.docs[0].id,
        data: { value: lastNumber },
      })
    } else {
      await payload.create({
        collection: 'counters',
        data: {
          name: 'transactions',
          value: lastNumber,
        },
      })
    }

    return {
      ...data,
      transactionNumber: `T-${year}${month}${day}-${String(lastNumber).padStart(5, '0')}`,
    }
  }
  return data
}
