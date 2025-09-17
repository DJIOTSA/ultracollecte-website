import { APIError, PayloadHandler, PayloadRequest, headersWithCors } from 'payload'

import { checkOperationSession } from '@/collections/OperationSessions/utils/check-operation-session'
import { ClientCollection } from '@/payload-types'

type ReqPayload = Omit<ClientCollection, 'createdAt' | 'id' | 'sizes' | 'updatedAt'> &
  Partial<Pick<ClientCollection, 'createdAt' | 'id' | 'updatedAt'>>
export const createLinkedClientCollection: PayloadHandler = async (req: PayloadRequest) => {
  const payload = req.payload
  const data: ReqPayload = await req.json?.()
  const transactionID = await req.payload.db.beginTransaction()
  const { microfinance, agency, membership } = data
  const requestDate = req.headers.get('X-Client-Time')

  try {
    const session = await checkOperationSession(req.payload, {
      microfinance,
      agency,
      date: requestDate,
    } as any)
  
    if (!session) {
      throw new APIError('Microfinance non ouvert', 406)
    } else if (session.status === 'closed') {
      throw new APIError('Microfinance fermé', 406)
    }
    const result = await payload.create({
      collection: 'client-collections',
      data: {
        ...data,
        sizes: [],
      },
    })
    const client = (
      await payload.find({
        collection: 'clients',
        where: {
          reference: { equals: data.clientReference },
          microfinance: { equals: data.microfinance },
        },
        depth: 0,
      })
    ).docs?.[0]
    if (result && client) {
      const collectionsSet = new Set(client.collections || [])
      collectionsSet.add(result.id)
      const updatedClient = await payload.update({
        collection: 'clients',
        id: client.id,
        data: {
          collections: [...collectionsSet],
        },
      })
      if (transactionID) await payload.db.commitTransaction(transactionID)
      return Response.json(updatedClient, {
        statusText: 'Created',
        status: 201,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      })
    }
    if (transactionID) await payload.db.rollbackTransaction(transactionID)
    return Response.json({ success: true })
  } catch (error) {
    if (transactionID) await payload.db.rollbackTransaction(transactionID)
    throw error
  }
}
