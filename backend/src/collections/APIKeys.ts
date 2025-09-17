import { isAuth } from '@/access/isAuth'
import { idField } from '@/fields/id'
import { microfinanceField } from '@/fields/microfinance'
import crypto from 'crypto'
import { CollectionConfig } from 'payload'

export const APIKeys: CollectionConfig = {
  slug: 'api-keys',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  fields: [
    microfinanceField({ required: true }),
    idField('AK'),
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'key',
      type: 'text',
      unique: true,
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data?.key) {
          data.key = crypto.randomBytes(32).toString('hex')
        }
        return data
      },
    ],
  },
}
