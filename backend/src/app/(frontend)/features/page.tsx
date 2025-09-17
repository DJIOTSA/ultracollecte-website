import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { FeaturesDetailed } from '@/components/pages/produit/FeaturesDetailed'

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FeaturesDetailed />
      <Footer />
    </main>
  )
}
