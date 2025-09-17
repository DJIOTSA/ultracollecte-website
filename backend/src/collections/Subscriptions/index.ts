import { CollectionConfig } from 'payload'
import { isAuth } from '@/access/isAuth'
import { idField } from '@/fields/id'
import { microfinanceField } from '@/fields/microfinance'

export const Subscriptions: CollectionConfig = {
  slug: 'subscriptions',
  access: {
    read: isAuth,
    create: isAuth,
    update: isAuth,
    delete: isAuth,
  },
  admin: {
    useAsTitle: 'microfinance',
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.startDate && data.durationInMonths && !data.endDate) {
          const start = new Date(data.startDate)
          const end = new Date(start)
          end.setMonth(start.getMonth() + data.durationInMonths)
          data.endDate = end.toISOString()
        }
        return data
      },
    ],
  },
  fields: [
    idField('SUB'),
    microfinanceField(),
    {
      name: 'package',
      type: 'relationship',
      relationTo: 'packages',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: false,
      defaultValue: () => new Date(),
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'durationInMonths',
      type: 'number',
      required: true,
      min: 1,
      defaultValue: 1,
    },
    {
      name: 'sentSmsCount',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: false,
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Expired', value: 'expired' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
  ],
}
