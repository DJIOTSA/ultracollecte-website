import { ClientCollection } from '@/payload-types'
import { APIError, CollectionBeforeChangeHook } from 'payload'

export const validateAmountBeforeChange: CollectionBeforeChangeHook<ClientCollection> = async ({
  data,
  req,
  operation,
}) => {
  if (operation === 'create' || operation === 'update') {
    const globalSetting = await req.payload.find({
      collection: 'settings',
      where: {
        microfinance: { equals: data.microfinance },
      },
      depth: 1,
      limit: 1,
    })
    if (globalSetting.docs.length === 0 || !globalSetting.docs) {
      return data
    }
    const globalSettingData = globalSetting.docs[0]
    // collection limit amount
    const collectionLimitAmount = globalSettingData.maxCollectionAmount;

    if ((data?.amount || 0) > collectionLimitAmount) {
      throw new APIError(`Le montant dépasse la limite de collection autorisée (${collectionLimitAmount})!`,
        422,
      )
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // get all the total amount collected by the member today
    const todayCollectionQuery = await req.payload.find({
      collection: 'client-collections',
      where: {
        microfinance: { equals: data.microfinance },
        membership: {
          equals: typeof data.membership === 'string' ? data.membership : data.membership?.id,
        },
        type: { equals: data.type },
        date: { greater_than: today.toISOString() },
      },
      select:{
        amount: true,
      },
      depth: 0,
      limit: 0,
    })
    // get all the agent settements of the day
    const todaySettlementsQuery = await req.payload.find({
      collection: 'daily-settlements',
      where: {
        microfinance: { equals: data.microfinance },
        date: { greater_than: today.toISOString(), },
        membership: {
          equals: typeof data.membership === 'string' ? data.membership : data.membership?.id,
        },
      },
      select:{
        totalDeposit: true,
      },
      depth: 0,
      limit: 0,
    })

    const amountAlreadyCollected = todayCollectionQuery.docs.reduce((acc, doc) => acc + (doc.amount || 0), 0)
    const alreadyAmountSettled = todaySettlementsQuery.docs.reduce((acc, doc) => acc + (doc.totalDeposit || 0), 0)
    let waittingSettlements = amountAlreadyCollected - alreadyAmountSettled;
    
    // if the amount already collected is less than the amount settled
    if (waittingSettlements < 0) {
      waittingSettlements = 0;
    }

    if ((data?.amount || 0) + waittingSettlements > collectionLimitAmount) {
      throw new APIError  (
        `🚨 Limite dépassée ! Vous avez atteint ${collectionLimitAmount}`,
        422,
        {
          errors: [
            {
              message: `🚨 Limite dépassée ! Vous avez atteint ${collectionLimitAmount}`,
              path: 'amount',
            },
          ],
        }
      )
    }

    return data
  }
  return data
}
