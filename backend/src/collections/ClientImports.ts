import { isAuth } from "@/access/isAuth";
import { idField } from "@/fields/id";
import { microfinanceField } from "@/fields/microfinance";
import { CollectionConfig } from 'payload';

export const ClientImports: CollectionConfig = {
  slug: 'client-imports',
  access: {
    read: isAuth,
    update: isAuth,
    delete: isAuth,
    create: isAuth,
  },
  admin:{
    useAsTitle: 'method'
  },
  fields: [
    idField('CI'),
    microfinanceField(),
    {
        name: 'method',
        type: 'select',
        options: ['import', 'manual', 'api'],
        defaultValue: 'import',
        admin: {
            readOnly: true,
        }
    },
    {
        name: 'totalClients',
        type: 'number',
        admin: {
            readOnly: true,
        }
    },
    {
        name: 'successfulTotal',
        type: 'number',
        admin: {
            readOnly: true,
        }
    },
    {
      name: "collections",
      type: "relationship",
      relationTo: "client-collections",
      hasMany: true,
    }
  ],
}