import { ClientCollection, Microfinance, Package } from '@/payload-types'
import { sendSMS } from '@/utils/sms-transport'
import { CollectionAfterOperationHook } from 'payload'

export const sendConfirmationNotification: CollectionAfterOperationHook<
  'client-collections'
> = async ({ req, result: doc, operation }) => {
  if (operation !== 'create') {
    return doc
  }

  const payload = req.payload
  try {
    const client = (
      await payload.find({
        collection: 'clients',
        where: {
          microfinance: {
            equals: typeof doc.microfinance === 'string' ? doc.microfinance : doc.microfinance?.id,
          },
          reference: { equals: doc.clientReference },
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

    const messages: { [K in ClientCollection['type']]: string } = {
      deposit: `Confirmation de collecte !
Merci d'avoir effectué votre épargne de ${doc.amount} ${doc.currency} le ${formattedDate},
l'ID de la transaction est : ${doc.transactionNumber}.`,
      withdrawal: `Confirmation de retrait !
Merci d'avoir effectué  votre retrait de ${doc.amount} ${doc.currency} le ${formattedDate},
l'ID de la transaction est : ${doc.transactionNumber}.`,
    }

    const message = messages[doc.type]
    await sendSMS({
      message,
      to: client.phone,
      from: (client.microfinance as Microfinance).name,
    }).then(() => {
      payload.update({
        collection: 'subscriptions',
        req,
        id: subscription.id,
        data: {
          sentSmsCount: (subscription.sentSmsCount || 0) + 1,
        },
      })
    }).catch(()=>{})

    return doc
  } catch (error) {
    console.error("Erreur d'envoi SMS:", error)
    return doc
  }
}
