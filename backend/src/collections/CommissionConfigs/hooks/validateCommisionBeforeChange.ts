import { CommissionConfig } from '@/payload-types';
import { APIError, CollectionBeforeChangeHook } from 'payload';

export const validateCommissionBeforeChange: CollectionBeforeChangeHook<CommissionConfig> = async ({
  req,
  operation,
  data,
}) => {
  const {microfinance, agency, membership} = data;

  // handle creation
  if (operation === 'create' && !agency) {
    const countMicrofinanceCommissionConfig = await req.payload.count({
      collection: 'commission-configs',
      where: {
        microfinance: {equals: microfinance},
        agency: { equals: 'null'},
        membership: {equals: 'null'},
      },  
    })
    if (countMicrofinanceCommissionConfig.totalDocs > 0) {
      throw new APIError('Microfinance commission config already exists', 422, {
        errors: [
          {
            field: 'microfinance',
            message: 'Microfinance commission config already exists',
          },
        ],
      })
    }
  }

  if (operation === 'create' && !!agency) {
    const countAgencyCommissionConfig = await req.payload.count({
      collection: 'commission-configs',
      where: {
        microfinance: {equals: microfinance},
        agency: { equals:  agency},
        membership: {equals: 'null'},
      },  
    })
    if (countAgencyCommissionConfig.totalDocs > 0) {
      throw new APIError('Agency commission config already exists', 422, {
        errors: [
          {
            field: 'agency',
            message: 'Agency commission config already exists',
          },
        ],
      })
    }
  }

  if (operation === 'create' && !!membership) {
    const countMembershipCommissionConfig = await req.payload.count({
      collection: 'commission-configs',
      where: {
        microfinance: {equals: microfinance},
        membership: {equals: membership},
      },  
    })
    if (countMembershipCommissionConfig.totalDocs > 0) {
      throw new APIError('Membership commission config already exists', 422, {
        errors: [
          {
            field: 'membership',
            message: 'Membership commission config already exists',
          },
        ],
      })
    }
  }

  return data
}
