import { Field } from 'payload'

export const agencyField = (override: Partial<Field> = {}) =>
  ({
    name: 'agency',
    type: 'relationship',
    relationTo: 'agencies',
    ...override,
  }) as Field
