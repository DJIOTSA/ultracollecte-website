import { headersWithCors, PayloadHandler } from 'payload'
import { sendMicrofinanceInvitationLinkToMs } from '../hooks/send-invitation-link'

export const sendInvitation: PayloadHandler = async (req) => {
  const data = await req.json?.()
  if (!data.ms || !data.invitationToken || !data.invitationExpiresAt) {
    return Response.json(
      { errors: [{ message: 'Missing invitation data' }] },
      {
        status: 400,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }
  const { invitationToken, invitationExpiresAt } = data
  const membership = await req.payload.findByID({
    collection: 'memberships',
    id: data.ms,
    depth: 1,
  })
  if (!membership) {
    return Response.json(
      { errors: [{ message: 'Membership not found' }] },
      {
        status: 404,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }
  if (membership.user)
    return Response.json({ errors: [{ message: 'Membership already accepted' }] })
  Object.assign(membership, { invitationToken, invitationExpiresAt })
  await req.payload.update({
    collection: 'memberships',
    id: membership.id,
    data: membership,
  })
  await sendMicrofinanceInvitationLinkToMs({
    microfinance: membership.microfinance as any,
    user: membership,
    req,
  })
  return Response.json({
    success: true,
  })
}

export const acceptInvitation: PayloadHandler = async (req) => {
  const data = await req.json?.()
  if (!req.user) {
    return Response.json(
      { errors: [{ message: 'User not found' }] },
      {
        status: 404,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }
  if (!data.token) {
    return Response.json(
      { errors: [{ message: 'Missing invitation token' }] },
      {
        status: 400,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }

  const membership = (
    await req.payload.find({
      collection: 'memberships',
      where: {
        invitationToken: {
          equals: data.token,
        },
      },
      depth: 1,
    })
  ).docs?.[0]
  if (!membership) {
    return Response.json(
      { errors: [{ message: 'Membership not found' }] },
      {
        status: 404,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }
  if (new Date(membership.invitationExpiresAt || new Date()) < new Date()) {
    return Response.json(
      { errors: [{ message: 'Invitation expired' }] },
      {
        status: 404,
        headers: headersWithCors({
          headers: new Headers(),
          req,
        }),
      },
    )
  }
  await req.payload.update({
    collection: 'memberships',
    id: membership.id,
    data: {
      user: req.user?.id,
      invitationToken: null,
      invitationExpiresAt: null,
    },
  })
  return Response.json({
    success: true,
  })
}
function generateRandomString(length = 64) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
export function getMsInvitationData() {
  return {
    invitationExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    invitationToken: generateRandomString(),
  }
}
