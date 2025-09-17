import { generateMonthKey } from '@/collections/Commissions/utils/generate-month-key'
import { ClientCollection } from '@/payload-types'
import { AfterChangeHook } from 'node_modules/payload/dist/collections/config/types'

export const createCommision: AfterChangeHook<ClientCollection> = async ({
  req,
  doc,
  operation,
}) => {
  if (operation !== 'create') return doc

  const payload = req.payload

  if (!doc.microfinance || doc.type !== 'deposit') return doc

  const commissionConfigs = (
    await payload.find({
      collection: 'commission-configs',
      where: {
        and: [
          {
            isEnable: { equals: true },
          },
          {
            or: [
              {
                microfinance: {
                  equals:
                    typeof doc.microfinance === 'string' ? doc.microfinance : doc.microfinance.id,
                },
              },
              {
                agency: {
                  equals: doc.agency
                    ? typeof doc.agency === 'string'
                      ? doc.agency
                      : doc.agency?.id
                    : undefined,
                },
              },
              {
                membership: {
                  equals: typeof doc.membership === 'string' ? doc.membership : doc.membership?.id,
                },
              },
            ],
          },
        ],
      },
      depth: 0,
    })
  ).docs

  if (commissionConfigs.length === 0) return doc
  let msConfig = commissionConfigs.find((e) => !!e.membership)
  const agencyConfig = commissionConfigs.find((e)=> !!e.agency && !e.membership)
  const microfinanceConfig = commissionConfigs.find((e) => !e.membership && !e.agency)
  const globalConfig = agencyConfig || microfinanceConfig;
  if (!globalConfig) {
    return doc
  }
  if (!msConfig) {
    msConfig = globalConfig
  }
  const microfinanceCommission = (doc.amount * (msConfig!.commissionPercentage || 0)) / 100;
  const commission = microfinanceCommission * (msConfig!.msCommissionPercentage || 0) / 100;
  if (commission === 0) return doc

  const currentMonthCommissions = (
    await payload.find({
      collection: 'commissions',
      where: {
        and: [
          {
            month: {
              equals: generateMonthKey(),
            },
          },
          {
            microfinance: {
              equals: typeof doc.microfinance === 'string' ? doc.microfinance : doc.microfinance.id,
            },
          },
          {
            membership: {
              equals: typeof doc.membership === 'string' ? doc.membership : doc.membership?.id,
            },
          },
          {
            agency: {
              equals: typeof doc.agency === 'string' ? doc.agency : doc.agency?.id,
            },
          },
        ],
      },
      limit: 1,
      depth: 0,
    })
  ).docs?.[0]
  const commissionData = {
    commissionConfigId: msConfig!.id,
    clientCollectionId: doc.id,
    commisionPercentage: msConfig!.commissionPercentage,
    msCommissionPercentage: msConfig!.msCommissionPercentage!,
    transactionAmount: doc.amount,
    commissionAmount: commission,
    date: new Date().toISOString(),
  }

  if (!currentMonthCommissions) {
    await payload.create({
      collection: 'commissions',
      data: {
        microfinance: typeof doc.microfinance === 'string' ? doc.microfinance : doc.microfinance.id,
        agency: typeof doc.agency === 'string' ? doc.agency : doc.agency?.id,
        membership: typeof doc.membership === 'string' ? doc.membership : doc.membership?.id,
        month: generateMonthKey(),
        commissions: [commissionData],
      },
    })
  } else {
    await payload.update({
      collection: 'commissions',
      id: currentMonthCommissions.id,
      data: {
        commissions: [...currentMonthCommissions.commissions, commissionData],
      },
    })
  }

  return doc
}
