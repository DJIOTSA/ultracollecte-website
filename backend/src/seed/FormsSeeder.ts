import { contactForm } from './data/forms/ContactForm'
import { demoForm } from './data/forms/DemoForm'
import { BaseSeeder, SeederInterface } from './seeder'

export class FormsSeeder extends BaseSeeder implements SeederInterface {
  async run() {
    const payload = await this.getPayload()
    console.log(`Running ${this.constructor.name}...`)
    const contactFormJSON = JSON.parse(JSON.stringify(contactForm))
    const demoFormJSON = JSON.parse(JSON.stringify(demoForm))
    await Promise.all([
      payload.db.deleteMany({ collection: 'forms', where: {} }),
      payload.create({
        collection: 'forms',
        data: contactFormJSON,
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
      payload.create({
        collection: 'forms',
        data: demoFormJSON,
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ])
  }
}
