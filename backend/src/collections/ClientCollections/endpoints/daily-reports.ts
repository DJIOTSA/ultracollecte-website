import { PayloadHandler, PayloadRequest, headersWithCors } from 'payload'

export const dailyReportsByMembership: PayloadHandler = async (req: PayloadRequest) => {
  const payload = req.payload
  const membershipIds = req.searchParams.get('memberships')?.split(',') || []
  const date = req.searchParams.get('date')
  if (!date) {
    return Response.json(
      {
        message: 'Date is required',
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
  if (membershipIds.length === 0) {
    return Response.json(
      {
        message: 'Membership is required',
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
  const start = new Date(date)
  start.setHours(0, 0, 0, 0)

  const end = new Date(date)
  end.setHours(23, 59, 59, 999)
  const clientCollections = await payload.find({
    collection: 'client-collections',
    req,
    where: {
      membership: {
        in: membershipIds,
      },
      type: {
        equals: 'deposit',
      },
      date: { greater_than_equal: start, less_than_equal: end },
    },
    depth: 0,
    limit: 1000,
  })
  const totalCollected = clientCollections.docs.reduce((total, clientCollection) => {
    return total + clientCollection.amount
  }, 0)
  const settlements = await payload.find({
    collection: 'daily-settlements',
    req,
    where: {
      membership: {
        in: membershipIds,
      },
      date: { greater_than_equal: start, less_than_equal: end },
    },
    depth: 0,
    limit: 1000,
  })
  const totalSettled = settlements.docs.reduce((total, dailySettlement) => {
    return total + dailySettlement.totalDeposit
  }, 0)

  return Response.json(
    {
      totalCollected,
      totalSettled,
      difference: totalCollected - totalSettled,
    },
    {
      headers: headersWithCors({
        headers: new Headers(),
        req,
      }),
    },
  )
}
