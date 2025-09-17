import { Agency } from '@/payload-types';
import { CollectionBeforeChangeHook } from 'payload';

export const validateAgencyBeforeChange: CollectionBeforeChangeHook<Agency> = async ({
  req,
  operation,
  data,
}) => {
  const {microfinance, name, id} = data;
  // handle creation
  if (operation === 'create') {
    const existingAgency = await req.payload.find({
      collection: 'agencies',
      where: {
        microfinance: {equals: typeof microfinance === 'string' ? microfinance : microfinance?.id},
        name: {equals: name},
      },
    })
    if (existingAgency.docs.length > 0) {
      throw 'Agency already exists'
    }
  }

  // handle update
  if (operation === 'update') {
    const existingAgency = await req.payload.find({
      collection: 'agencies',
      where: {
        microfinance: {equals: typeof microfinance === 'string' ? microfinance : microfinance?.id},
        name: {equals: name},
        id: {not_equals: id},
      },
    })
    if (existingAgency.docs.length > 0) {
      throw new Error('Agency already exists')
    }
  }

  return data
}
