import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { APIKeys } from './collections/APIKeys'
import { ClientCollections } from './collections/ClientCollections'
import { ClientImports } from './collections/ClientImports'
import { Clients } from './collections/Clients'
import { DailySettlements } from './collections/DailySettlements'
import { Media } from './collections/Media'
import { Membership } from './collections/Membership'
import { Microfinance } from './collections/Microfinance'
import { Settings } from './collections/Settings'
import { Users } from './collections/Users'
// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import sharp from 'sharp'
import { Admins } from './collections/Admins'
import { Agencies } from './collections/Agencies'
import { CommissionConfigs } from './collections/CommissionConfigs'
import { Commissions } from './collections/Commissions'
import { CountersCollection } from './collections/Counters'
import { OperationSessions } from './collections/OperationSessions'
import { Packages } from './collections/Packages'
import { Subscriptions } from './collections/Subscriptions'
import { expireSubscriptions } from './collections/Subscriptions/jobs/expire-subscriptions'
import { WithdrawalRequests } from './collections/WithdrawalRequests'
import { Contacts } from './globals/Contacts'
import { redisCachePlugin } from './plugins/redis-plugin'
import { websocketServerPlugin } from './plugins/ws-plugin'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Admins.slug,
    avatar: 'default',
    meta: {
      icons: [
        {
          url: '/adaptive-icon.png',
        },
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '@/components/atoms/Logo#Logo',
        Icon: '@/components/atoms/Logo#Icon',
      },
    },
  },
  globals: [Contacts],
  collections: [
    ...[Users, Admins, Media, Packages, CountersCollection].map((c) => ({
      ...c,
      admin: {
        ...c.admin,
        group: 'System',
      },
    })),
    ...[
      ClientImports,
      Settings,
      Microfinance,
      Agencies,
      Membership,
      Clients,
      CommissionConfigs,
      OperationSessions,
    ].map((c) => ({
      ...c,
      admin: {
        ...c.admin,
        group: 'Microfinance system',
      },
    })),
    ...[
      APIKeys,
      Subscriptions,
      ClientCollections,
      DailySettlements,
      WithdrawalRequests,
      Commissions,
    ].map((c) => ({
      ...c,
      admin: {
        ...c.admin,
        group: 'Microfinance activities',
      },
    })),
  ],
  jobs: {
    tasks: [
      {
        slug: 'expireSubscriptions',
        handler: ({ req }) => expireSubscriptions({ payload: req.payload }),
      },
    ],
    autoRun: [
      {
        cron: '0 0 * * *',
        queue: 'nightly',
        limit: 100,
      },
    ],
    shouldAutoRun: async () => true,
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_FROM_ADDRESS || 'no-reply@ultracollecte.com',
    defaultFromName: process.env.SMTP_FROM_NAME || 'ULTRACOLLECTE',
    transportOptions: {
      host: process.env.SMTP_HOST,
      service: process.env.SMTP_SERVICE,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  sharp,
  serverURL:
    process.env.NODE_ENV === 'development' ? undefined : process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
  plugins: [
    ...(!!process.env.S3_BUCKET &&
      !!process.env.S3_ACCESS_KEY_ID &&
      !!process.env.S3_SECRET_ACCESS_KEY
      ? [
        s3Storage({
          collections: {
            media: {
              prefix: 'media/ultracollecte',
              signedDownloads: {
                shouldUseSignedURL: ({ collection, filename, req }) => {
                  return filename.endsWith('.mp4')
                },
              },
            },
          },
          bucket: process.env.S3_BUCKET,
          config: {
            credentials: {
              accessKeyId: process.env.S3_ACCESS_KEY_ID,
              secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
            },
            region: process.env.S3_REGION,
            // ... Other S3 configuration
          },
        }),
      ]
      : []),
    payloadCloudPlugin(),
    redisCachePlugin({ redisUrl: process.env.REDIS_URL! }),
    // storage-adapter-placeholder
    formBuilderPlugin({
      formOverrides: {
        admin: { group: 'Forms' },
      },
      formSubmissionOverrides: {
        admin: { group: 'Forms' },
      },
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: true,
        state: true,
        country: true,
        checkbox: true,
        number: true,
        message: true,
        date: false,
        payment: false,
      },
      defaultToEmail: process.env.ADMIN_EMAIL,
    }),
    websocketServerPlugin({
      collections: ['clients', 'client-collections', 'withdrawal-requests', 'operation-sessions'],
      // channelField: 'microfinance',
      port: Number(process.env.WS_PORT) || 8019,
    }),
    // socketIORealtimePlugin({
    //   port: 4001,
    //   channelField: 'microfinance',
    //   collections: ['clients', 'client-collections', 'withdrawal-requests'],
    // }),
  ],


  // cors: ['*', ...(process.env.PAYLOAD_ALLOWED_ORIGINS?.split(',') || [])],
  cors: {
    origins: [
      '*',
      ...(process.env.PAYLOAD_ALLOWED_ORIGINS?.split(',') || []),
    ],
    headers: [
      '*',
      'Authorization',
      'Content-Type',
      'X-Client-Time',
    ],
  },
})
