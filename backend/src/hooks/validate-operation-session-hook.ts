import { checkOperationSession } from '@/collections/OperationSessions/utils/check-operation-session'
import { APIError, CollectionBeforeChangeHook } from 'payload'

export const validateOperationSessionHook: CollectionBeforeChangeHook = async ({
  data,
  req,
  operation,
}) => {
  const requestDate = req.headers.get('X-Client-Time')
  if (!requestDate) {
    throw new APIError('Date non fournie', 406)
  }
  if (
    operation === 'create' ||
    (operation === 'update' && req.user?.collection !== 'admins')
  ) {
    const { microfinance, agency } = data
    const session = await checkOperationSession(req.payload, {
      microfinance,
      agency,
      date: requestDate,
    })

    if (!session) {
      throw new APIError('Microfinance non ouvert', 406)
    } else if (session.status === 'closed') {
      throw new APIError('Microfinance fermé', 406)
    }
    return data
  }
  return data
}
