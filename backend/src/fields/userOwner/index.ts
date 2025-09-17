import { Field } from 'payload'

export const userOwner = (override: Partial<Field> = {}) =>
  ({
    name: 'user',
    type: 'relationship',
    relationTo: 'users',
    required: false,
    ...override,
  }) as Field
