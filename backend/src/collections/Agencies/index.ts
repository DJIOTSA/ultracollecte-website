import { isAuth } from '@/access/isAuth'
import { idField } from '@/fields/id'
import { microfinanceField } from '@/fields/microfinance'
import type { CollectionConfig } from 'payload'
import { validateAgencyBeforeChange } from './hooks/validateAgencyBeforeChange'

export const Agencies: CollectionConfig = {
  slug: 'agencies',
  labels: {
    singular: 'Agency',
    plural: 'Agencies',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'microfinance', 'email'],
  },
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  hooks:{
    beforeChange: [
      validateAgencyBeforeChange,
    ]
  },
  fields: [
    idField('AG'),
    microfinanceField({ required: true }),
    {
      name: 'name',
      type: 'text',
      required: false,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      required: false,
    },
    {
      name: 'city',
      type: 'text',
      required: false,
    },
    {
      name: 'address',
      type: 'text',
      required: false,
    },
  ],
}
