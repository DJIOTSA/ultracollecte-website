import { FooterClient } from './FooterClient'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
export async function Footer() {
  const payload = await getPayload({ config: configPromise })
  const contacts = await payload.findGlobal({
    slug: 'contacts',
  })
  return <FooterClient contactsGlobals={contacts} />
}
