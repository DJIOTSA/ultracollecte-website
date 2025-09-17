import { membershipField, microfinanceField } from '@/fields/microfinance'

import { isAuth } from '@/access/isAuth'
import { agencyField } from '@/fields/agency'
import { idField } from '@/fields/id'
import { validateOperationSessionHook } from '@/hooks/validate-operation-session-hook'
import { validateMembership } from '@/hooks/validateMembership'
import { CollectionConfig } from 'payload'
import { checkClients } from './endpoints/check-clients'
import { editClient } from './endpoints/edit-client'
import { importBulk } from './endpoints/import-bulk'

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'firstName',
  },
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  fields: [
    idField('CL'),
    {
      type: 'row',
      fields: [
        microfinanceField({ required: true }),
        { name: 'user', type: 'relationship', relationTo: 'users', required: false },
      ],
    },
    membershipField({ required: false }),
    agencyField({ required: false }),
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'reference',
      type: 'text',
      required: false,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
    {
      name: 'email',
      type: 'email',
      required: false,
    },
    {
      name: 'address',
      type: 'textarea',
    },
    {
      name: 'nationalID',
      label: 'National ID',
      type: 'text',
    },
    {
      name: 'balance',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'accountNumber',
      type: 'text',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Waiting', value: 'waiting' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Blacklisted', value: 'blacklisted' },
      ],
      defaultValue: 'waiting',
    },
    {
      name: 'collections',
      type: 'relationship',
      relationTo: 'client-collections',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  endpoints: [
    {
      method: 'post',
      path: '/check-potential-clients',
      handler: checkClients,
    },
    {
      method: 'post',
      path: '/import-bulk',
      handler: importBulk,
    },
    {
      method: 'post',
      path: '/edit-client',
      handler: editClient,
    },
  ],
  hooks: {
    beforeChange: [
      validateMembership, 
      async(props)=>{
        if(props.operation === 'create'){
          return validateOperationSessionHook(props)
        }
        return props.data
      }
    ],
  },
}
