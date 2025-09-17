import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { HelpsSection } from '@/components/pages/help/HelpsSection'

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <HelpsSection />
      <Footer />
    </main>
  )
}
