import { Agency, Microfinance, OperationSession } from '@/payload-types'
import { APIError, CollectionBeforeChangeHook } from 'payload'
import { checkOperationSessionState } from '../endpoints/checkOperationSessionState'

function getOperationSessionCreateLevel({
  microfinance,
  agency,
}: {
  microfinance: string | Microfinance | undefined
  agency: string | Agency | undefined
}) {
  if (!!agency && !!microfinance) {
    return 'agency'
  }
  if (!!microfinance && !agency) {
    return 'microfinance'
  }
  return undefined
}

function getOperationSessionLevel(operationSession: OperationSession) {
  if (!!operationSession?.agency && !!operationSession?.microfinance) {
    return 'agency'
  }
  if (!!operationSession?.microfinance && !operationSession?.agency) {
    return 'microfinance'
  }
  return undefined
}

export const validateOperationSessionBeforeChange: CollectionBeforeChangeHook<
  OperationSession
> = async ({ data, operation, req }) => {
  const { microfinance, agency, status, createdBy, createdAt } = data
  const payload = req.payload

  if (operation === 'create' || operation === 'update') {
    const microfinanceId = typeof microfinance === 'string' ? microfinance : microfinance?.id
    const agencyId = typeof agency === 'string' ? agency : agency?.id
    const createdById = typeof createdBy === 'string' ? createdBy : createdBy?.id

    let agencyObj: Agency | null | undefined = null

    if (!['open', 'closed'].includes(status || '')) {
      throw new APIError('Invalid status!', 422, {
        errors: [
          {
            message: 'Invalid status!',
            path: 'status',
          },
        ],
      })
    }

    /* 
        Validate the creation per day and per: 
        - microfinance
        - microfinance and agency
    */
    if (operation === 'create') {
      if (!createdAt && req.user?.collection !== 'admins') {
        throw new APIError('CreatedAt is required!', 422, {
          errors: [
            {
              message: 'CreatedAt is required!',
              path: 'createdAt',
            },
          ],
        })
      }
      const today = req.user?.collection === 'admins' ? new Date().toISOString() : createdAt
      const checkOperationSession = await checkOperationSessionState({
        ...req,
        data: { ...data, date: today },
      })
      const session = await checkOperationSession.json()

      const { state } = session

      if (['open', 'closed'].includes(state)) {
        const level = getOperationSessionCreateLevel({
          microfinance: microfinanceId,
          agency: agencyId,
        })
        const sessionLevel = getOperationSessionLevel(session.data)
        if (!level || !sessionLevel) {
          throw new APIError('Données invalides!', 422, {
            errors: [
              {
                message: 'Données invalides!',
                path: `${microfinanceId ? 'microfinance,' : ''}${agencyId ? 'agency' : ''}`,
              },
            ],
          })
        } else if (level === sessionLevel) {
          throw new APIError('Une session existe deja!', 407, {
            errors: [
              {
                message: 'Une session existe deja!',
                path: level,
              },
            ],
          })
        }
      }
    }

    // validate the agency
    if (!!agencyId) {
      agencyObj = await payload.findByID({
        collection: 'agencies',
        id: agencyId,
        depth: 1,
      })
      if (
        !agencyObj ||
        (typeof agencyObj.microfinance === 'string'
          ? agencyObj.microfinance
          : agencyObj.microfinance.id) !== microfinanceId
      ) {
        throw new APIError('Invalid agency', 422, {
          errors: [
            {
              message: 'Invalid agency',
              path: 'agency',
            },
          ],
        })
      }
    }

    // validate createdBy
    const createdByObj = await payload.findByID({
      collection: 'memberships',
      id: createdById || '',
      depth: 1,
    })
    if (
      !createdByObj ||
      (typeof createdByObj.microfinance === 'string'
        ? createdByObj.microfinance
        : (createdByObj.microfinance as Microfinance).id) !== microfinanceId
    ) {
      throw new APIError('Invalid createdBy', 422, {
        errors: [
          {
            message: 'Invalid createdBy',
            path: 'createdBy',
          },
        ],
      })
    } else if (
      req.user?.collection !== 'admins' &&
      !!agencyObj &&
      createdByObj.role !== 'admin' &&
      (typeof createdByObj.agency === 'string'
        ? createdByObj?.agency
        : (createdByObj.agency as Agency)?.id) !== agencyObj?.id
    ) {
      throw new APIError('Invalid createdBy!', 422, {
        errors: [
          {
            message: 'Invalid createdBy!',
            path: 'createdBy',
          },
        ],
      })
    }
    return data
  }

  return data
}
