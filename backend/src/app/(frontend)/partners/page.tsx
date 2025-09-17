import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { ParnersSection } from '@/components/pages/partners/ParnersSection'

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <ParnersSection />
      <Footer />
    </main>
  )
}
