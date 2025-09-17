import { PayloadHandler, PayloadRequest, headersWithCors } from 'payload'

export const clientsAmounts: PayloadHandler = async (req: PayloadRequest) => {
  const payload = req.payload
  const clientsIds = req.searchParams.get('clients')?.split(',') || []
  if (clientsIds.length === 0) {
    return Response.json(
      {
        message: 'Client is required',
      },
      {
        statusText: 'Bad Request',
        status: 400,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }
  const collectionsResult = await payload.find({
    collection: 'client-collections',
    where: {
      clientReference: {
        in: clientsIds,
      },
    },
    limit: 0,
  })
  const result: Record<string, number> = {}

  for (const doc of collectionsResult.docs) {
    const clientId = doc.clientReference
    const amount = typeof doc.amount === 'number' ? doc.amount : 0

    if (!clientId) continue

    result[clientId] = (result[clientId] || 0) + (doc.type === 'deposit' ? amount : -amount)
  }
  return Response.json(result, {
    headers: headersWithCors({ headers: new Headers(), req }),
  })
}
