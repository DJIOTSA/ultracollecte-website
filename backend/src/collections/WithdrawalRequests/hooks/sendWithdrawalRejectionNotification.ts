import { Agency, Microfinance, Package, WithdrawalRequest } from '@/payload-types'
import { sendSMS } from '@/utils/sms-transport'
import { CollectionAfterChangeHook } from 'payload'

export const sendWithdrawalRejectionNotification: CollectionAfterChangeHook<
  WithdrawalRequest
> = async ({ req, doc, previousDoc }) => {
  if (!previousDoc) {
    return doc
  }
  if (doc.status === 'approved') {
    return doc
  }
  if (doc.status === 'rejected' && previousDoc.status === 'pending') {
    const payload = req.payload
    const clientid = typeof doc.client === 'string' ? doc.client : doc.client?.id
    try {
      const client = (
        await payload.find({
          collection: 'clients',
          where: {
            microfinance: {
              equals:
                typeof doc.microfinance === 'string' ? doc.microfinance : doc.microfinance?.id,
            },
            id: { equals: clientid },
          },
          depth: 1,
        })
      ).docs?.[0]

      if (!client?.phone) {
        payload.logger.warn('Client has no phone number')
        return doc
      }
      const subscriptions = await payload.find({
        collection: 'subscriptions',
        where: {
          microfinance: {
            equals: typeof doc.microfinance === 'string' ? doc.microfinance : doc.microfinance?.id,
          },
          status: { equals: 'active' },
          endDate: { greater_than: new Date() },
        },
      })
      if (
        subscriptions.docs.length === 0 ||
        subscriptions.docs.every((item) => item.sentSmsCount === (item.package as Package).smsCount)
      ) {
        payload.logger.warn('Client has no active subscription')
        return doc
      }

      const subscription = subscriptions.docs.find(
        (item) => (item.sentSmsCount || 0) < (item.package as Package).smsCount,
      )
      if (!subscription) {
        payload.logger.warn('Client has no active subscription 2')
        return doc
      }
      const formattedDate = new Date(doc.date || Date.now()).toLocaleDateString()

      const messages = {
        withdrawal: `Demande de retrait rejetée ! Votre retrait de ${doc.amount} ${(client.microfinance as Microfinance).currency}, effectué le ${formattedDate}, a été refusé. 
Raisons : ${doc.reason} . Contactez votre opérateur de microfinance pour plus d’informations.`,
      }

      const message = messages['withdrawal']
      const from =
        client.microfinance && client.agency
          ? `${(client.microfinance as Microfinance).name} - ${(client.agency as Agency).name}`
          : (client.microfinance as Microfinance).name

      await sendSMS({
        message,
        to: client.phone,
        from,
      }).then(() => {
        payload.update({
          collection: 'subscriptions',
          req,
          id: subscription.id,
          data: {
            sentSmsCount: (subscription.sentSmsCount || 0) + 1,
          },
        })
      })

      if (!!doc.membership && typeof doc.membership !== 'string' && !!doc.membership.email) {
        await req.payload.sendEmail({
          to: doc.membership.email,
          subject: 'Demande de retrait rejetée',
          html: `
    La demande de retrait de ${doc.amount} ${(doc.microfinance as Microfinance).currency} a été rejetée,
    l'id de la demande est ${doc.id}. 
    Raisons : ${doc.reason} . Contactez votre opérateur de microfinance pour plus d’informations.`,
        })
      }
      return doc
    } catch (error) {
      console.error("Erreur d'envoi SMS:", error)
      return doc
    }
  }
  return doc
}
