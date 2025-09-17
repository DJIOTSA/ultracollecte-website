import { CollectionBeforeChangeHook, NotFound } from "payload"

export const validateReference: CollectionBeforeChangeHook = async ({ data, req }) => {
  const client = await req.payload.find({
    collection: 'clients',
    where: { reference: { equals: data.clientReference }, microfinance: { equals: data.microfinance } },
    depth: 1,
  })
  if (!client.docs.length) {
    throw new NotFound(()=>'Client Reference not found')
  }
  return data
}