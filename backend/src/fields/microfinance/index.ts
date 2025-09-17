import { Field } from 'payload'

export const microfinanceField = (override: Partial<Field> = {}) =>
  ({
    name: 'microfinance',
    type: 'relationship',
    relationTo: 'microfinances',
    ...override,
  }) as Field

export const membershipField = (override: Partial<Field> = {}) =>
  ({
    name: 'membership',
    type: 'relationship',
    relationTo: 'memberships',
    required: true,
    ...override,
  }) as Field
