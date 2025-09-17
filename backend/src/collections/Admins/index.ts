import { idField } from '@/fields/id'
import type { CollectionConfig } from 'payload'

export const Admins: CollectionConfig = {
  slug: 'admins',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'avatar', 'lastLoginAt'],
  },
  auth: true,
  fields: [
    idField('ADM'),
    {
      name: 'name',
      type: 'text',
      required: false,
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'lastLoginAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
