import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { WebinarsSection } from '@/components/pages/webinars/WebinarsSection'

export default function WebinarsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <WebinarsSection />

      <Footer />
    </main>
  )
}
