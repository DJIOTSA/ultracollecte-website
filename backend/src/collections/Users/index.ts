import { anyone } from '@/access/anyone'
import { idField } from '@/fields/id'
import type { CollectionConfig } from 'payload'
import { generateUserCode } from './hooks/generate-user-code'
import { membershipToUserAfterLogin } from './hooks/membership-to-user'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'isAdmin', 'status'],
  },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 30,
    verify: {
      generateEmailHTML: ({ user, token }) => {
        const url = `${process.env.FRONTEND_DOMAIN}/verify-account?token=${token}`
        return `Salut ${user.name}, merci de cliquer sur le lien suivant pour activer votre compte: <a href="${url}">${url}</a>`
      },
    },
    forgotPassword: {
      generateEmailHTML: (args) => {
        if (!args) return ''
        const { user, token } = args
        const url = `${process.env.FRONTEND_DOMAIN}/reset-password?token=${token}`
        return `Salut ${user.name}, merci de cliquer sur le lien suivant pour changer votre mot de passe: <a href="${url}">${url}</a>`
      },
    },
  },
  access: {
    create: anyone,
    admin: () => false,
  },
  fields: [
    idField('USR'),
    {
      name: 'name',
      type: 'text',
      required: false,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
    {
      name: 'code',
      type: 'text',
      unique: true,
      required: false,
    },
    {
      name: 'status',
      type: 'select',
      saveToJWT: true,
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Disabled', value: 'disabled' },
      ],
      defaultValue: 'active',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'lastLoginAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
  hooks: {
    beforeChange:[generateUserCode],
    afterLogin: [membershipToUserAfterLogin],
  },
}
