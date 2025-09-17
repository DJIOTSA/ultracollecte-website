import crypto from 'crypto'
import { TextField } from 'payload'

type Id = (prefix?: string) => TextField

export const idField: Id = (prefix = '') => {
  return {
    name: 'id',
    type: 'text',
    index: true,
    unique: true,
    required: true,
    defaultValue: () => prefix.toUpperCase() + '_' + crypto.randomBytes(14).toString('hex'),
    label: 'Id',
    admin: {
      hidden: true,
    },
  }
}
