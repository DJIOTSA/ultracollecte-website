import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { GuidesSection } from '@/components/pages/guides/GuidesSection'

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}

      <GuidesSection />
      <Footer />
    </main>
  )
}
