import { FormsSeeder } from './FormsSeeder'
import { PackagesSeeder } from './PackagesSeeder'
import { dbSeeder } from './seeder'

const handler = async () => {
  await dbSeeder.call([
    new FormsSeeder(),
    new PackagesSeeder(),
    /**
     * Other seeders
     */
  ])
}

handler().catch((error) => {
  console.error('❌ Error running seeders', error)
  process.exit(1)
})
