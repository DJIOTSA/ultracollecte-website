import { isAdmin } from '@/access/isAdmin'
import { GlobalConfig } from 'payload'

export const Contacts: GlobalConfig = {
  slug: 'contacts',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'address',
      type: 'text',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'phone2',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'contactEmail',
          type: 'text',
          required: false,
        },
        {
          name: 'supportEmail',
          type: 'text',
          required: false,
        },
      ],
    },

    //Social Media
    {
      type: 'row',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          required: false,
        },
        {
          name: 'twitter',
          type: 'text',
          required: false,
        },
        {
          name: 'instagram',
          type: 'text',
          required: false,
        },
        {
          name: 'linkedin',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
}
