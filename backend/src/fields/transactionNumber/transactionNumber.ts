import { Field, TextField } from 'payload'

type TransactionNumber = (override?: Partial<Field>) => TextField

export const transactionNumberField: TransactionNumber = (override = {}) => {
  return {
    name: 'transactionNumber',
    type: 'text',
    unique: true,
    required: false,
    admin: {
      readOnly: true,
      position: 'sidebar',
    },
    ...override,
  } as TextField
}
