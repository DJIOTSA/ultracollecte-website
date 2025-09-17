import { isAuth } from '@/access/isAuth'
import { idField } from '@/fields/id'
import type { CollectionConfig } from 'payload'
export const CountersCollection: CollectionConfig = {
  slug: 'counters',
  admin: {
    hidden: true,
  },
  access: {
    read: isAuth,
    update: () => false,
    delete: () => false,
    create: isAuth,
  },
  fields: [
    idField('C'),
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'value',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
  ],
}
