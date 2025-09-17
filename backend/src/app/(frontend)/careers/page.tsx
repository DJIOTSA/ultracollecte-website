import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { CareersSection } from '@/components/pages/entreprise/CareersSection'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CareersSection />
      <Footer />
    </main>
  )
}
