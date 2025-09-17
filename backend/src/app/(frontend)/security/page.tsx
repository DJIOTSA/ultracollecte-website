import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { SecuritySection } from '@/components/pages/produit/SecuritySection'

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SecuritySection />
      <Footer />
    </main>
  )
}
