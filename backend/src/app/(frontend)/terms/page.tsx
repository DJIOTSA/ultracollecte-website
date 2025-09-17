import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { TermsSection } from '@/components/pages/legal/TermsSection'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TermsSection />
      <Footer />
    </main>
  )
}
