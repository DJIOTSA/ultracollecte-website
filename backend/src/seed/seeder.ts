import payloadConfig from '@/payload.config'
import payload from 'payload'

export interface SeederInterface {
  run(): Promise<void>
}

export class BaseSeeder {
  async getPayload() {
    await payload.init({
      config: payloadConfig,
    })
    return payload
  }
}

export class DatabaseSeeder {
  public async call(seeders: SeederInterface[]) {
    await Promise.all(seeders.map((seeder) => seeder.run()))

    console.log('Seeding complete!')
    process.exit(0)
  }
}

export const dbSeeder = new DatabaseSeeder()
