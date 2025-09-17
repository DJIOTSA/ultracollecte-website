import { Membership, Microfinance } from '@/payload-types'
import { CollectionAfterOperationHook, PayloadRequest } from 'payload'
import crypto from 'crypto'

// @ts-ignore
const rolesLabels: Record<Membership['role'], string> = {
  admin: 'Administrateur',
  agent: 'Agent de collecte',
  cashier: 'Caissier',
  user: 'Superviseur',
}

export const sendInvitationLinkOnCreate: CollectionAfterOperationHook<'memberships'> = async ({
  req,
  operation,
  result,
  args,
}) => {
  if ((operation !== 'create' && operation !== 'updateByID') || !!result.user) {
    return result
  }
  const data = args.data

  if (result.user || !data.email) {
    return result
  }
  let microfinance: Microfinance = result.microfinance as Microfinance
  if (typeof result.microfinance === 'string') {
    microfinance = (
      await req.payload.find({
        collection: 'microfinances',
        where: {
          id: {
            equals: microfinance,
          },
        },
        depth: 0,
      })
    ).docs?.[0]
  }
  if (!!microfinance)
    return sendMicrofinanceInvitationLinkToMs({
      microfinance,
      user: result,
      req,
    })

  return result
}

export async function sendMicrofinanceInvitationLinkToMs({
  microfinance,
  user,
  req,
}: {
  microfinance: Microfinance
  user: Membership
  req: PayloadRequest
}) {
  if (!!user.invitationToken) {
    await req.payload.sendEmail({
      to: user.email,
      subject: `Invitation à la microfinance ${microfinance.name}`,
      html: `
      <p>Invitation à la microfinance ${microfinance.name}</p>
      <p>Role: ${rolesLabels[(user.role as 'admin') || 'user']}</p>
      <a href="${process.env.FRONTEND_URL}/join-microfinance?ms=${user.id}&token=${user.invitationToken}">Accepter l'invitation</a>
    `,
    })
  }
  return user
}
