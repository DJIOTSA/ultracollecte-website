import { isAuth } from '@/access/isAuth'
import { agencyField } from '@/fields/agency'
import { idField } from '@/fields/id'
import { microfinanceField } from '@/fields/microfinance'
import { APIError, CollectionConfig } from 'payload'

export const Settings: CollectionConfig = {
  slug: 'settings',
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  labels: {
    singular: 'Settings',
    plural: 'Settings',
  },
  admin: {
    useAsTitle: 'microfinance',
  },
  fields: [
    idField('SE'),
    microfinanceField({ required: true }),
    agencyField({ required: false, unique: true }),
    {
      name: 'maxCollectionAmount',
      type: 'number',
      required: true,
      min: 0,
      defaultValue: 100000,
    },
    {
      name: 'maxTimeBetweenDeposits',
      type: 'number',
      required: true,
      min: 1,
      max: 168,
      defaultValue: 24,
    },
    {
      name: 'notifySupervisorsOnLimit',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'applyLimitToAllAgents',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'updatedBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'allowWithdrawalToAgents',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'allowHistoryToClients',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'enableCommision',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'commissionPercentage',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'msCommissionPercentage',
      type: 'number',
      defaultValue: 0,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ req, data, operation }) => {
        if (req.user?.collection === 'users') {
          data.updatedBy = req.user!.id
        }
        if (operation === 'create') {
          // make sure the microfinance is unique
          if (!data.agency) {
            const existingMicrofinanceCount = await req.payload.find({
              collection: 'settings',
              where: {
                microfinance: {
                  equals: data.microfinance,
                },
                agency: {
                  equals: 'null',
                },
              },
              limit: 1,
              depth: 0,
            })

            if (existingMicrofinanceCount.docs.length > 0) {
              throw new APIError('Microfinance already exists', 422, {
                errors: [
                  {
                    field: 'microfinance',
                    message: 'Microfinance already exists',
                  },
                ],
              })
            }
          }

          // make sure the agency is unique
          if (!!data.agency) {
            const existingAgencyCount = await req.payload.find({
              collection: 'settings',
              where: {
                agency: {
                  equals: data.agency,
                },
                microfinance: {
                  equals: data.microfinance,
                },
              },
              limit: 1,
              depth: 0,
            })

            if (existingAgencyCount.docs.length > 0) {
              throw new APIError('Agency already exists', 422, {
                errors: [
                  {
                    field: 'agency',
                    message: 'Agency already exists',
                  },
                ],
              })
            }
          }

          return data;
        }

        return data;
      },
    ],
    afterChange: [
      async ({ req, operation, doc }) => {
        const payload = req.payload
        if (operation === 'create' && doc.enableCommision && !!doc.microfinance) {
          await payload.create({
            collection: 'commission-configs',
            data: {
              microfinance: doc.microfinance,
              agency: doc.agency,
              isEnable: doc.enableCommision,
              commissionPercentage: doc.commissionPercentage,
              msCommissionPercentage: doc.msCommissionPercentage,
            },
          })
        }

        if (operation === 'update' && !!doc.microfinance) {
          const currentCommissionConfig = await payload.find({
            collection: 'commission-configs',
            where: {
              microfinance: {
                equals: typeof doc.microfinance === 'string' ? doc.microfinance : doc.microfinance.id,
              },
              agency: {
                equals: doc.agency ? (typeof doc.agency === 'string' ? doc.agency : doc.agency.id) : 'null',
              },
              membership: {
                equals: null,
              },
            },
            limit: 1,
            depth: 0,
          })
          if (currentCommissionConfig.docs.length > 0 && doc.enableCommision) {
            await payload.update({
              collection: 'commission-configs',
              id: currentCommissionConfig.docs[0].id,
              data: {
                microfinance: typeof doc.microfinance === 'string' ? doc.microfinance : doc.microfinance.id,
                agency: doc.agency ? (typeof doc.agency === 'string' ? doc.agency : doc.agency?.id) : 'null',
                isEnable: doc.enableCommision,
                commissionPercentage: doc.commissionPercentage,
                msCommissionPercentage: doc.msCommissionPercentage,
              },
            })
          } else if (doc.enableCommision) {
            await payload.create({
              collection: 'commission-configs',
              data: {
                microfinance: typeof doc.microfinance === 'string' ? doc.microfinance : doc.microfinance.id,
                agency: doc.agency ? (typeof doc.agency === 'string' ? doc.agency : doc.agency?.id) : 'null',
                isEnable: doc.enableCommision,
                commissionPercentage: doc.commissionPercentage,
                msCommissionPercentage: doc.msCommissionPercentage,
              },
            })
          }
        }

        return doc
      },
    ],
  },
}
