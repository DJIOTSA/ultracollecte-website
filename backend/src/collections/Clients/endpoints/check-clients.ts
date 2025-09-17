import { PayloadHandler, PayloadRequest, headersWithCors } from 'payload'

import { z } from 'zod'

const LIMIT_CLIENTS_CHECK = 100000

export const CheckClientsSchema = z.object({
  microfinanceId: z.string().min(1),
  agencyId: z.string().optional(),
  potentialClients: z
    .array(
      z.object({
        firstName: z.string(),
        membership: z.string().optional(),
        lastName: z.string(),
        reference: z.string(),
        phone: z.string(),
        email: z.string().email().optional(),
        nationalID: z.string().optional(),
        accountNumber: z.string().optional(),
        photo: z.any().optional(),
      }),
    )
    .min(1),
})
const fields = ['email', 'phone', 'nationalID', 'accountNumber', 'reference'] as const

export const checkClients: PayloadHandler = async (req: PayloadRequest) => {
  const data = await req.json?.()
  const validation = CheckClientsSchema.safeParse(data)
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

  const { microfinanceId, agencyId, potentialClients } = validation.data

  const potentialValues = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: [...new Set(potentialClients.map((c) => c[field]).filter(Boolean))],
    }),
    {} as Record<(typeof fields)[number], string[]>,
  )

  const existingClients = await req.payload.find({
    collection: 'clients',
    where: {
      and: [{
        microfinance: { equals: microfinanceId },
        agency: { equals: agencyId },

      }],
      or: fields.map((field) => ({
        [field]: { in: potentialValues[field] },
      })),
    },
    limit: LIMIT_CLIENTS_CHECK,
  })

  const duplicates = fields.reduce(
    (acc, field) => {
      const existing = existingClients.docs
        .map((doc) => doc[field])
        .filter((value) => potentialValues[field].includes(value as string))

      return {
        ...acc,
        [field]: [...new Set(existing)],
      }
    },
    {} as Record<(typeof fields)[number], string[]>,
  )

  return Response.json(
    {
      success: true,
      data: {
        duplicates,
        stats: {
          totalChecked: potentialClients.length,
          totalDuplicates: Object.values(duplicates).reduce((sum, arr) => sum + arr.length, 0),
        },
      },
    },
    {
      headers: headersWithCors({
        headers: new Headers(),
        req,
      }),
    },
  )
}
