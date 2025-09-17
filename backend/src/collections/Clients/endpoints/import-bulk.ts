import { Forbidden, NotFound, PayloadHandler, PayloadRequest, headersWithCors } from 'payload'

import { z } from 'zod'
import { CheckClientsSchema } from './check-clients'

const schema = CheckClientsSchema.extend({
  totalClients: z.number().optional(),
  method: z.enum(['import', 'manual', 'api']).default('import'),
})

export const importBulk: PayloadHandler = async (req: PayloadRequest) => {
  const data = await req.json?.()
  const validation = schema.safeParse(data)
  if (!validation.success) {
    return Response.json(
      { error: validation.error.flatten() },
      {
        status: 400,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }
  const { microfinanceId, agencyId, potentialClients, totalClients } = validation.data
  const microfinance = await req.payload.findByID({
    collection: 'microfinances',
    id: microfinanceId,
  })
  if (!microfinance) {
    throw new NotFound(() => 'Microfinance not found')
  }
  if (microfinance.status !== 'active') {
    throw new Forbidden(() => `Microfinance ${microfinance.name} is not active`)
  }
  try {
    potentialClients.forEach(async (client) => {
      await req.payload.create({
        collection: 'clients',
        req,
        data: {
          ...client,
          microfinance: microfinanceId,
          agency: agencyId,
          status: 'active',
        },
      })
    })

    await req.payload.create({
      collection: 'client-imports',
      req,
      data: {
        microfinance: microfinanceId,
        method: validation.data.method,
        totalClients,
        successfulTotal: potentialClients.length,
      },
    })
    return Response.json(
      { success: true, data: {} },
      { headers: headersWithCors({ headers: new Headers(), req }) },
    )
  } catch (error: any) {
    return Response.json(
      { error: 'Client creation failed', message: error.message },
      { status: 500, headers: headersWithCors({ headers: new Headers(), req }) },
    )
  }
}
