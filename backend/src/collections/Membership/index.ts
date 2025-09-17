import { isAuth } from '@/access/isAuth'
import { agencyField } from '@/fields/agency'
import { idField } from '@/fields/id'
import { microfinanceField } from '@/fields/microfinance'
import { CollectionConfig } from 'payload'
import { acceptInvitation, sendInvitation } from './endpoints/invitations'
import { remainingCollections } from './endpoints/remaining-collections'
import { sendInvitationLinkOnCreate } from './hooks/send-invitation-link'

export const Membership: CollectionConfig = {
  slug: 'memberships',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  indexes: [{ fields: ['microfinance', 'user'], unique: true }],
  fields: [
    idField('MS'),
    {
      type: 'row',
      fields: [
        microfinanceField(),
        { name: 'user', type: 'relationship', relationTo: 'users', required: false },
      ],
    },
    { name: 'name', type: 'text', required: false },
    { name: 'email', type: 'text', required: false },
    agencyField(),
    { name: 'invitedAt', type: 'date', required: false },
    { name: 'invitationToken', type: 'text', required: false, admin: { readOnly: true } },
    { name: 'invitationExpiresAt', type: 'date', required: false },
    {
      type: 'row',
      fields: [
        {
          name: 'role',
          type: 'select',
          options: ['admin', 'agent', 'user', 'cashier', 'coordinator'],
          defaultValue: 'agent',
        },
        {
          name: 'status',
          type: 'select',
          options: ['active', 'waiting', 'suspended'],
          defaultValue: 'active',
        },
      ],
    },
  ],
  endpoints: [
    {
      path: '/invitations',
      method: 'post',
      handler: sendInvitation,
    },
    {
      path: '/accept-invitation',
      method: 'post',
      handler: acceptInvitation,
    },
    {
      path: '/remaining-collections',
      method: 'get',
      handler: remainingCollections,
    },
  ],
  hooks: {
    afterOperation: [sendInvitationLinkOnCreate],
    // beforeValidate: [
    //   async ({ data, req, operation }) => {
    //     //Check if user exists inside microfinance
    //     if (!data?.microfinance || !data?.user || operation !== 'create') return data
    //     const ms = await req.payload.find({
    //       collection: 'memberships',
    //       where: {
    //         microfinance: data.microfinance,
    //         user: data.user,
    //       },
    //       depth: 0,
    //     })
    //     if (ms.docs.length > 0) {
    //       throw new DuplicateFieldName('user')
    //     }
    //     return data
    //   },
    // ],
    beforeChange: [
      async ({ data, req }) => {
        if (!data?.name || data.name === '') {
          const userObj = await req.payload.findByID({
            collection: 'users',
            id: data.user,
          })
          data.name = userObj.name
        }

        return data
      },
    ],
  },
}
