import { Corporate } from './data/packages/Corporate'
import { Pro } from './data/packages/Pro'
import { Starter } from './data/packages/Starter'
import { BaseSeeder, SeederInterface } from './seeder'

export class PackagesSeeder extends BaseSeeder implements SeederInterface {
  async run() {
    const payload = await this.getPayload()
    console.log(`Running ${this.constructor.name}...`)
    const StarterJSON = JSON.parse(JSON.stringify(Starter))
    const CorporateJSON = JSON.parse(JSON.stringify(Corporate))
    const ProJSON = JSON.parse(JSON.stringify(Pro))
    const packages = await payload.find({
      collection: 'packages',
      where: {
        id: {
          in: [StarterJSON.id, CorporateJSON.id, ProJSON.id],
        },
      },
    })
    console.log('L:', packages.docs.length)
    if(packages.docs.length===3){
      console.log('Packages already exist')
      return
    }
    await payload.db.deleteMany({ collection: 'packages', where: {} })
    await Promise.all([
      payload.create({
        collection: 'packages',
        data: StarterJSON,
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
      payload.create({
        collection: 'packages',
        data: CorporateJSON,
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
      payload.create({
        collection: 'packages',
        data: ProJSON,
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ])
  }
}
