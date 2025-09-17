import { membershipField, microfinanceField } from '@/fields/microfinance'

import { isAuth } from '@/access/isAuth'
import { agencyField } from '@/fields/agency'
import { idField } from '@/fields/id'
import { transactionNumberField } from '@/fields/transactionNumber/transactionNumber'
import { generateTransactionNumber } from '@/hooks/generateTransactionNumber'
import { validateMembership } from '@/hooks/validateMembership'
import type { CollectionConfig } from 'payload'
import { currencies } from '../Microfinance/constants'
import { clientsAmounts } from './endpoints/clients-amounts'
import { createLinkedClientCollection } from './endpoints/create-linked-client-collection'
import { dailyReportsByMembership } from './endpoints/daily-reports'
import { createCommision } from './hooks/create-commission'
import { notifyMembershipOnWithdrawal } from './hooks/membership-notification-on-withdrawal'
import { sendConfirmationNotification } from './hooks/sendConfirmationNotification'
import { validateReference } from './hooks/validateReference'

export const ClientCollections: CollectionConfig = {
  slug: 'client-collections',
  labels: {
    singular: 'Collection',
    plural: 'Collections',
  },
  admin: {
    useAsTitle: 'transactionNumber',
  },
  hooks: {
    beforeChange: [
      // validateAmountBeforeChange,
      validateMembership,
      validateReference,
      generateTransactionNumber,
    ],
    afterOperation: [sendConfirmationNotification],
    afterChange: [notifyMembershipOnWithdrawal, createCommision],
  },
  endpoints: [
    {
      method: 'post',
      path: '/create-linked-client-collection',
      handler: createLinkedClientCollection,
    },
    {
      method: 'get',
      path: '/ms-report',
      handler: dailyReportsByMembership,
    },
    {
      method: 'get',
      path: '/clients-amounts',
      handler: clientsAmounts,
    },
  ],
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  fields: [
    idField('COL'),
    microfinanceField({}),
    membershipField({ required: false }),
    transactionNumberField(),
    agencyField(),
    {
      name: 'type',
      type: 'select',
      required: true,
      options: ['deposit', 'withdrawal'],
      defaultValue: 'deposit',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'amount',
          type: 'number',
          required: true,
          max: 10000000,
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
      name: 'withdrawalSource',
      type: 'relationship',
      relationTo: 'withdrawal-requests',
      required: false,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'latitude',
          type: 'number',
          required: false,
        },
        {
          name: 'longitude',
          type: 'number',
          required: false,
        },
        {
          name: 'address',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'signature',
      type: 'textarea',
      required: false,
    },
    {
      name: 'clientReference',
      type: 'text',
      label: 'Client Reference',
    },
    {
      name: 'date',
      type: 'date',
      label: 'Collection Date',
      defaultValue: () => new Date(),
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'reversedAt',
      type: 'date',
      label: 'Reversed At',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
