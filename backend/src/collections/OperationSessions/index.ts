import { isAuth } from '@/access/isAuth';
import { agencyField } from '@/fields/agency';
import { idField } from '@/fields/id';
import { membershipField, microfinanceField } from '@/fields/microfinance';
import { CollectionConfig } from 'payload';
import { checkOperationSessionState } from './endpoints/checkOperationSessionState';
import { validateOperationSessionBeforeChange } from './hooks/validate-operation-session';

export const OperationSessions: CollectionConfig = {
  slug: 'operation-sessions',
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  labels: {
    singular: 'Operation Session',
    plural: 'Operation Sessions',
  },
  admin: {
    useAsTitle: 'microfinance',
  },
  fields: [
    idField('OS'),
    microfinanceField({ required: true }),
    membershipField({ name: 'createdBy', required: true }),
    agencyField({ required: false,}),
    {
      name: 'closedAt',
      type: 'date',
      required: false,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
        name: 'status',
        type: 'select',
        options: [
            { label: 'Open', value: 'open' },
            { label: 'Closed', value: 'closed' },
        ],
        defaultValue: 'open',
        required: true,
        admin:{
            readOnly: true,
            position: 'sidebar',
        },
    },
  ],
  endpoints: [
    {
      method: 'post',
      path: '/check-operation-session-state',
      handler: checkOperationSessionState,
    },
  ],
  hooks: {
    beforeChange: [validateOperationSessionBeforeChange, ],
    afterChange: [],
  },
}
