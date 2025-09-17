import { ClientCollection, Membership } from '@/payload-types'
import { CollectionAfterChangeHook } from 'payload'

export const notifyMembershipOnWithdrawal: CollectionAfterChangeHook<ClientCollection> = async ({
  req,
  operation,
  doc,
}) => {
  if (doc.type !== 'withdrawal' || operation !== 'create') return doc
  const membership = doc.membership as Membership
  if (typeof membership === 'string') {
    await req.payload.findByID({
      collection: 'memberships',
      id: membership,
    })
  }
  if (!!membership?.email) {
    await req.payload.sendEmail({
      to: membership.email,
      subject: 'Demande de retrait acceptée',
      html: `
La demande de retrait de ${doc.amount} FCFA a été acceptée,
l'id de la transaction est ${doc.transactionNumber}p>`,
    })
  }
  return doc
}
