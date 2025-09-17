import { ClientCollection, WithdrawalRequest } from '@/payload-types'
import { CollectionAfterChangeHook } from 'payload'

export const transactionAftervalidation: CollectionAfterChangeHook<WithdrawalRequest> = async ({
  req,
  doc,
  previousDoc,
}) => {
  const payload = req.payload
  const client = await payload.findByID({
    collection: 'clients',
    id: typeof doc.client === 'string' ? doc.client : doc.client.id,
  })
  const data = {
    membership: typeof doc.membership === 'string' ? doc.membership : doc.membership?.id,
    agency: typeof doc.agency === 'string' ? doc.agency : doc.agency,
    microfinance: doc.microfinance,
    clientReference: client.reference,
    amount: doc.amount,
    date: new Date().toISOString(),
    type: 'withdrawal' as const,
    withdrawalSource: doc.id,
  }
  if (doc.status === 'approved' && previousDoc.status === 'pending') {
    payload.create({
      req,
      collection: 'client-collections',
      data,
    })
  }
  if (!previousDoc && doc.status === 'approved') {
    payload.create({
      req,
      collection: 'client-collections',
      data,
    })
  }
  return doc
}
