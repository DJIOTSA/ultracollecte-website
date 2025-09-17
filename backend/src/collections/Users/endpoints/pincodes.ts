import { APIError, headersWithCors, PayloadHandler } from 'payload'
import * as bcrypt from 'bcrypt'

export const VerifyPin: PayloadHandler = async (req) => {
  const data = await req.json?.()
  const user = req.user as any

  if (!user) throw new APIError('Unauthorized', 401)

  const { pin } = data

  if (!user.pin) throw new APIError('PIN not set', 400)

  const isValid = await bcrypt.compare(pin, user.pin)

  if (!isValid) throw new APIError('PIN incorrect', 401)

  return Response.json(
    {
      success: true,
    },
    {
      status: 400,
      headers: headersWithCors({
        headers: new Headers(),
        req,
      }),
    },
  )
}
