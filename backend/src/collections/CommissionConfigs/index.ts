import { isAuth } from '@/access/isAuth'
import { agencyField } from '@/fields/agency'
import { idField } from '@/fields/id'
import { membershipField, microfinanceField } from '@/fields/microfinance'
import { CollectionConfig } from 'payload'
import { validateCommissionBeforeChange } from './hooks/validateCommisionBeforeChange'

export const CommissionConfigs: CollectionConfig = {
  slug: 'commission-configs',
  labels: {
    singular: 'Commission config',
    plural: 'Commission configs',
  },
  admin: {},
  hooks: {
    beforeChange: [validateCommissionBeforeChange],
  },
  endpoints: [],
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  fields: [
    idField('CMC'),
    microfinanceField({ required: true }),
    membershipField({ required: false }),
    agencyField(),
    {
      name: 'isEnable',
      type: 'checkbox',
      defaultValue: true,
      required: true,
    },
    {
      name: 'commissionPercentage',
      type: 'number',
      required: true,
      min: 0,
      max: 100,
      defaultValue: 0,
    },
    {
      name: 'msCommissionPercentage',
      type: 'number',
      required: false,
      min: 0,
      max: 100,
      defaultValue: 0,
      validate: function (this: any, val: number | undefined | null, { data }: { data: any }) {
        if (data?.membership && (val === null || val === undefined)) {
          return 'msCommissionPercentage is required when membership is specified';
        }
        return true;
      },
    },
  ]
}
