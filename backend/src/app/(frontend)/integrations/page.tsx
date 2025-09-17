import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { IntegrationsSection } from '@/components/pages/produit/IntegrationsSection'

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <IntegrationsSection />
      <Footer />
    </main>
  )
}
