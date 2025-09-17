import { APIError, headersWithCors, PayloadHandler } from 'payload'

export const remainingCollections: PayloadHandler = async (req) => {
  const payload = req.payload
  const agentIds = req.searchParams.get('agents')?.split(',') || []
  const microfinanceId = req.searchParams.get('microfinance')
  const agencyId = req.searchParams.get('agency')

  if (!agentIds.length) {
    throw new APIError('Agents are required', 400)
  }
  if (!microfinanceId) {
    throw new APIError('Microfinance is required', 400)
  }

  const microfinanceSettings = await payload.find({
    collection: 'settings',
    where: {
      microfinance: { equals: microfinanceId },
      agency: { equals: null },
    },
    limit: 1,
    depth: 0,
  })

  const agencySettings = await payload.find({
    collection: 'settings',
    where: {
      microfinance: { equals: microfinanceId },
      agency: { equals: agencyId },
    },
    limit: 1,
    depth: 0,
  })

  const setting = agencySettings.docs[0] || microfinanceSettings.docs[0]
  if (!setting) {
    throw new APIError('Setting not found', 404)
  }

  const limit = setting.maxCollectionAmount
  const collectionsResult = await payload.find({
    collection: 'client-collections',
    where: {
      membership: {
        in: agentIds,
      },
      type: { equals: 'deposit' },
      microfinance: { equals: microfinanceId },
      agency: { equals: agencyId },
    },
    select: {
      membership: true,
      amount: true,
    },
    limit: 0,
    depth: 0,
  })

  const settlementResult = await payload.find({
    collection: 'daily-settlements',
    where: {
      membership: {
        in: agentIds,
      },
      microfinance: { equals: microfinanceId },
      agency: { equals: agencyId },
    },
    select: {
      membership: true,
      totalDeposit: true,
    },
    limit: 0,
    depth: 0,
  })

  const resultCollections: Record<string, number> = {}
  const resultSettlements: Record<string, number> = {}

  for (const doc of collectionsResult.docs) {
    const agentId = doc.membership as string
    if (!agentId) continue

    const amount = typeof doc.amount === 'number' ? doc.amount : 0
    resultCollections[agentId] = (resultCollections[agentId] || 0) + amount
  }

  for (const doc of settlementResult.docs) {
    const agentId = doc.membership as string
    const amount = typeof doc.totalDeposit === 'number' ? doc.totalDeposit : 0

    if (!agentId) continue

    resultSettlements[agentId] = (resultSettlements[agentId] || 0) + amount
  }

  const result: Record<string, number> = {}

  for (const agentId of agentIds) {
    result[agentId] =
      (result[agentId] || 0) + (resultCollections[agentId] || 0) - (resultSettlements[agentId] || 0)
  }

  //   if result is negative set it to zero
  for (const agentId of agentIds) {
    if (result[agentId] < 0) {
      result[agentId] = 0
    }
    result[agentId] = limit - (result[agentId] || 0)
  }

  return Response.json(result, {
    headers: headersWithCors({ headers: new Headers(), req }),
  })
}
