import { membershipField, microfinanceField } from '@/fields/microfinance'

import { isAuth } from '@/access/isAuth'
import { agencyField } from '@/fields/agency'
import { idField } from '@/fields/id'
import { transactionNumberField } from '@/fields/transactionNumber/transactionNumber'
import { generateTransactionNumber } from '@/hooks/generateTransactionNumber'
import { validateMembership } from '@/hooks/validateMembership'
import { CollectionConfig } from 'payload'

export const DailySettlements: CollectionConfig = {
  slug: 'daily-settlements',
  admin: {
    useAsTitle: 'date',
  },
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  fields: [
    idField('DS'),
    transactionNumberField(),
    microfinanceField({ required: true }),
    membershipField(),
    agencyField(),
    {
      name: 'date',
      type: 'date',
      label: 'Settlement Date',
      index: true,
      defaultValue: () => new Date(),
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'totalCollected',
      type: 'number',
      required: true,
    },
    {
      name: 'totalDeposit',
      type: 'number',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [validateMembership, generateTransactionNumber],
  },
}
