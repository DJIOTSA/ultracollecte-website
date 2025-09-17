import { isAuth } from '@/access/isAuth'
import { idField } from '@/fields/id'
import { slugField } from '@/fields/slug'
import { CollectionConfig } from 'payload'
import { currencies } from './constants'
import { createLinkedMicrofinanceCollection } from './endpoints/create-linked-company'
import { notifyAdminOnCreation } from './hooks/notify-admin-on-creation'
import { anyone } from '@/access/anyone'

export const Microfinance: CollectionConfig = {
  slug: 'microfinances',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: anyone,
    update: isAuth,
    delete: ({ data, req }) => {
      if (req.user?.collection === 'admins') {
        return true
      }
      return false
      // return data?.owner === req.user?.id
    },
    create: isAuth,
  },
  endpoints: [
    {
      method: 'post',
      path: '/create-owned-microfinance',
      handler: createLinkedMicrofinanceCollection,
    },
  ],
  fields: [
    ...slugField('name'),
    idField('MF'),
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    {
      type: 'row',
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
        },
      ],
    },
    {
      name: 'address',
      type: 'textarea',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'country',
          type: 'text',
        },
        {
          name: 'currency',
          type: 'select',
          options: currencies as unknown as string[],
          defaultValue: 'XAF',
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Waiting', value: 'waiting' },
        { label: 'Suspended', value: 'suspended' },
      ],
      defaultValue: 'waiting',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (data.status !== 'active') {
          return data
        }
        if (req.user?.collection === 'users') {
          data.status = 'waiting'
        }
        return data
      },
    ],
    afterChange: [notifyAdminOnCreation],
  },
}
