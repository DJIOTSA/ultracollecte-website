import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { PrivacySection } from '@/components/pages/legal/PrivacySection'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PrivacySection />
      <Footer />
    </main>
  )
}
