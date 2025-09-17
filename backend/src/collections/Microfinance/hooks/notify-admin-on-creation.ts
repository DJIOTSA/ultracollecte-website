import { Microfinance } from '@/payload-types'
import { CollectionAfterChangeHook } from 'payload'

export const notifyAdminOnCreation: CollectionAfterChangeHook<Microfinance> = async ({
  doc,
  req,
  operation,
}) => {
  const adminEmail = process.env.ADMIN_EMAIL
  if (operation !== 'create') {
    return
  }
  const adminPath = req.payload.getAdminURL()
  await req.payload.sendEmail({
    to: adminEmail,
    subject: `Nouvelle microfinance [${doc.name}]`,
    html: `
        <p>Nouvelle microfinance : ${doc.name}</p>
        <a href="${process.env.BACKEND_DOMAIN}${adminPath}/collections/microfinances/${doc.id}">Voir la microfinance</a>
      `,
  })
  return doc
}
