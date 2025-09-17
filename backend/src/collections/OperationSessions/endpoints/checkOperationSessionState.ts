import { OperationSession } from '@/payload-types'
import { headersWithCors, PayloadHandler, PayloadRequest, ValidationError } from 'payload'
import { z } from 'zod'
import { checkOperationSession } from '../utils/check-operation-session'

const schema = z.object({
  microfinance: z.string().or(z.object({ id: z.string() })),
  agency: z
    .string()
    .optional()
    .nullable()
    .or(z.object({ id: z.string() })),
  date: z.string().optional(),
})

const createOperationSessionResponse = (
  message: string,
  state: 'open' | 'closed' | 'not_found' | 'error',
  status = 404,
  req: PayloadRequest,
  data?: OperationSession | undefined,
) => {
  return Response.json(
    { message, status, state, data },
    {
      status,
      statusText: message,
      headers: headersWithCors({
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        req,
      }),
    },
  )
}

export const checkOperationSessionState: PayloadHandler = async (req: PayloadRequest) => {
  let requestData: any = {}
  try {
    const jsonBody = await req.json?.()
    if (jsonBody) {
      requestData = { ...jsonBody }
    }
    if (req.data) {
      requestData = { ...req.data, ...requestData } // req.json() (requestData) overrides req.data
    }

    const validation = schema.safeParse(requestData)

    if (!validation.success) {
      return Response.json(
        { error: validation.error.flatten(), status: 400, state: 'error', message: 'Invalid data' },
        {
          status: 422,
          headers: headersWithCors({
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
            req,
          }),
        },
      )
    }

    const { microfinance, agency,  date} = validation.data
    const microfinanceId = typeof microfinance === 'string' ? microfinance : microfinance?.id
    const agencyId = agency ? (typeof agency === 'string' ? agency : agency?.id) : undefined

    let today: Date = new Date()
    if (req.user?.collection !== 'admins' && !date) {
      throw new ValidationError({
        errors: [
          {
            path: 'date',
            message: "La date est requise pour vérifier l'état de la session!",
          },
        ],
      })
    } else if (req.user?.collection !== 'admins' && date) {
      today = new Date(date)
    }
    const check = await checkOperationSession(req.payload, {microfinance: microfinanceId, agency: agencyId, date: today.toISOString()})
    if (!check ) {
      return createOperationSessionResponse('Microfinance non ouvert', 'not_found', 406, req)
    }

    if (check.status === 'closed') {
      return createOperationSessionResponse('Microfinance fermée', 'closed', 406, req, check)
    }
    return createOperationSessionResponse('Microfinance ouvert', 'open', 200, req, check)
  } catch (error: any) {
    throw createOperationSessionResponse(
      `${error?.message ? error?.message : 'Une erreur est survenue lors de la vérification de la session'}`,
      'error',
      error?.status || 500,
      req,
    )
  }
}
