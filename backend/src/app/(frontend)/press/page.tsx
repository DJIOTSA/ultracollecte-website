import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { PressSection } from '@/components/pages/entreprise/PressSection'

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PressSection />
      <Footer />
    </main>
  )
}
