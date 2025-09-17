export const contactForm = {
  title: 'Contact',
  fields: [
    {
      id: '685c0cc034db7116ab93609d',
      name: 'firstname',
      label: 'Prénom',
      width: 50,
      defaultValue: null,
      required: true,
      blockName: 'firstname',
      blockType: 'text',
    },
    {
      id: '685c0d0534db7116ab9360a2',
      name: 'lastname',
      label: 'Nom',
      width: 50,
      defaultValue: null,
      required: true,
      blockName: 'lastname',
      blockType: 'text',
    },
    {
      id: '685c0d4f34db7116ab9360a7',
      name: 'email',
      label: 'Email',
      width: null,
      required: true,
      blockName: 'email',
      blockType: 'email',
    },
    {
      id: '685c0d8034db7116ab9360a9',
      name: 'phone',
      label: 'Numéro de Téléphone',
      width: null,
      defaultValue: null,
      required: true,
      blockName: 'phone',
      blockType: 'text',
    },
    {
      id: '685c0db434db7116ab9360ab',
      name: 'company',
      label: "Nom de l'entreprise",
      width: null,
      defaultValue: null,
      required: true,
      blockName: 'company',
      blockType: 'text',
    },
    {
      id: '685c0df134db7116ab9360ad',
      name: 'role',
      label: 'Poste',
      width: null,
      defaultValue: null,
      required: null,
      blockName: 'role',
      blockType: 'text',
    },
    {
      id: '685c0e0934db7116ab9360af',
      name: 'object',
      label: 'Sujet',
      width: null,
      defaultValue: null,
      placeholder: null,
      required: null,
      blockName: 'object',

      options: [
        {
          id: '685c0e2734db7116ab9360b1',
          label: 'Demande de demonstration',
          value: 'Proof',
        },
        {
          id: '685c0e2734db7116ab936045',
          value: 'demo',
          label: 'Demande de démonstration',
        },
        {
          id: '685c0e2734db7116ab9360b2',
          value: 'pricing',
          label: 'Questions sur les tarifs',
        },
        {
          id: '685c0e2734db7116ab9360b3',
          value: 'features',
          label: 'Informations sur les fonctionnalités',
        },
        {
          id: '685c0e2734db7116ab9360b4',
          value: 'integration',
          label: 'Intégration technique',
        },
        {
          id: '685c0e2734db7116ab9360b5',
          value: 'support',
          label: 'Support technique',
        },
        {
          id: '685c0e2734db7116ab9360b6',
          value: 'partnership',
          label: 'Partenariat',
        },
        {
          id: '685c0e2734db7116ab9360b7',
          value: 'other',
          label: 'Autre',
        },
      ],
      blockType: 'select',
    },

    {
      id: '685c0e5434db7116ab9360b3',
      name: 'message',
      label: 'Message',
      width: null,
      defaultValue: null,
      required: null,
      blockName: 'message',
      blockType: 'textarea',
    },
  ],
  submitButtonLabel: null,
  confirmationType: 'message',
  confirmationMessage: {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,

      children: [
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,

          children: [
            {
              mode: 'normal',
              text: 'Merci pour votre message, on vous revient des que possible!',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0,
        },
      ],
      direction: 'ltr',
    },
  },

  redirect: {
    url: null,
  },
  emails: [],
  updatedAt: '2025-06-25T15:00:21.089Z',
  createdAt: '2025-06-25T14:58:41.041Z',
}

export type ContactFormType = typeof contactForm & { id: string | number }
