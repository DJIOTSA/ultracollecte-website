import { checkOperationSessionState } from '@/collections/OperationSessions/endpoints/checkOperationSessionState'
import { Membership } from '@/payload-types'
import { CollectionBeforeChangeHook, Forbidden } from 'payload'

export const validateOperationSession: CollectionBeforeChangeHook<Membership> = async ({
  data,
  req,
  operation,
}) => {
  const requestDate = req.headers.get('X-Client-Time')
  if (
    (operation === 'create' ||
      operation === 'update') && req.user?.collection !== 'admins'
  ) {

    const { microfinance, agency } = data
    const checkOperationSession = await checkOperationSessionState({
      ...req,
      data: { microfinance, agency, date: requestDate },
    })
    const session = await checkOperationSession.json()

    const { status, state, message } = session

    if (state === 'error' || status >= 400) {
      throw new Forbidden(() => message)
    }
    if (['not_found', 'closed'].includes(state)) {
      throw new Forbidden(() => message)
    }
    return data
  }
  return data
}
