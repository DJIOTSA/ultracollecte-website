import { PayloadHandler, PayloadRequest, headersWithCors } from 'payload'

import { Microfinance } from '@/payload-types'

type ReqPayload = Omit<Microfinance, 'createdAt' | 'id' | 'sizes' | 'updatedAt'> &
  Partial<Pick<Microfinance, 'createdAt' | 'id' | 'updatedAt'>>
export const createLinkedMicrofinanceCollection: PayloadHandler = async (req: PayloadRequest) => {
  const data: ReqPayload = await req.json?.()
  const userId = req.user?.id
  const microfinance = await req.payload.create({
    collection: 'microfinances',
    data: {
      owner: userId,
      ...data,
      status: 'waiting',
    },
  })

  if (userId) {
    const user = await req.payload.findByID({
      collection: 'users',
      id: userId,
    })

    await req.payload.create({
      collection: 'memberships',
      data: {
        microfinance: microfinance.id,
        user: userId,
        role: 'admin',
        name: user.name,
        status: 'active',
      },
    })
  }
  return Response.json(microfinance, {
    statusText: 'Created',
    status: 201,
    headers: headersWithCors({
      headers: new Headers(),
      req,
    }),
  })
}
