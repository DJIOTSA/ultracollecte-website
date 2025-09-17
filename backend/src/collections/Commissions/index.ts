import { isAuth } from '@/access/isAuth'
import { agencyField } from '@/fields/agency'
import { idField } from '@/fields/id'
import { membershipField, microfinanceField } from '@/fields/microfinance'
import { CollectionConfig } from 'payload'
import { validateCommissionPayload } from './hooks/month-validations'

export const Commissions: CollectionConfig = {
  slug: 'commissions',
  access: {
    read: isAuth,
    delete: isAuth,
    update: isAuth,
    create: isAuth,
  },
  admin: {
    useAsTitle: 'month',
    defaultColumns: ['month', 'microfinance', 'membership', 'commissions'],
  },
  hooks: {
    beforeChange: [validateCommissionPayload],
  },
  fields: [
    idField('CM'),
    microfinanceField({ required: true }),
    membershipField({ required: false }),
    agencyField(),
    {
      name: 'month',
      type: 'text',
      required: true,
    },
    {
      name: 'commissions',
      type: 'array',
      required: true,
      defaultValue: [],
      fields: [
        {
          name: 'commissionConfigId',
          type: 'text',
          required: true,
        },
        {
          name: 'clientCollectionId',
          type: 'text',
          required: true,
        },
        {
          name: 'commisionPercentage',
          type: 'number',
          min: 0,
          max: 100,
          required: true,
        },
        {
          name: 'msCommissionPercentage',
          type: 'number',
          min: 0,
          max: 100,
          required: true,
          defaultValue: 0,
        },
        {
          name: 'transactionAmount',
          type: 'number',
          min: 0,
          required: true,
        },
        {
          name: 'commissionAmount',
          type: 'number',
          min: 0,
          required: true,
        },
        {
          name: 'date',
          type: 'date',
          defaultValue: () => new Date().toISOString(),
          required: true,
        },
      ],
    },
  ],
}
