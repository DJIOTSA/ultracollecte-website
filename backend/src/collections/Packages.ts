import { anyone } from '@/access/anyone'
import { isAuth } from '@/access/isAuth'
import { idField } from '@/fields/id'
import { CollectionConfig } from 'payload'

export const Packages: CollectionConfig = {
  slug: 'packages',
  access: {
    read: anyone,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    idField('PKG'),
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'clientsCount',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'agentsCount',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'adminsCount',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'agenciesCount',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'agentLocalization',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'enableCommision',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'smsCount',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'supervisorsCount',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
    {
      name: 'cashiersCount',
      type: 'number',
      required: false,
      defaultValue: 0,
    },
    {
      name: 'supportType',
      type: 'select',
      options: ['standard', '24/7', 'premium'],
      defaultValue: 'standard',
    },
  ],
}
