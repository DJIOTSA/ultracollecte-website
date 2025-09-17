import { isAuth } from '@/access/isAuth'
import { agencyField } from '@/fields/agency'
import { idField } from '@/fields/id'
import { membershipField, microfinanceField } from '@/fields/microfinance'
import { validateOperationSessionHook } from '@/hooks/validate-operation-session-hook'
import { validateMembership } from '@/hooks/validateMembership'
import { CollectionConfig } from 'payload'
import { sendWithdrawalRejectionNotification } from './hooks/sendWithdrawalRejectionNotification'
import { transactionAftervalidation } from './hooks/transaction-aftervalidation'

export const WithdrawalRequests: CollectionConfig = {
  slug: 'withdrawal-requests',
  labels: {
    singular: 'Withdrawal Request',
    plural: 'Withdrawal Requests',
  },
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  admin: {
    useAsTitle: 'id',
  },
  fields: [
    idField('WR'),
    {
      type: 'row',
      fields: [microfinanceField({}), 
      membershipField({required: false}), 
      agencyField()],
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'amount',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'date',
          type: 'date',
          defaultValue: () => new Date().toISOString(),
          required: false,
        },
      ],
    },
    {
      name: 'reason',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'Retrait pour remboursement, urgence, etc.',
      },
    },
    {
      name: 'signature',
      type: 'textarea',
      required: false,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'approved', 'rejected'],
      defaultValue: 'pending',
      required: true,
    },
    {
      name: 'approvedBy',
      type: 'relationship',
      relationTo: 'memberships',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'approvedAt',
      type: 'date',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [
      transactionAftervalidation,
      sendWithdrawalRejectionNotification,
    ],
    beforeChange: [
      validateMembership, 
      validateOperationSessionHook
    ],
  },
}
