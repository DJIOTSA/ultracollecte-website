import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { GDPRSection } from '@/components/pages/legal/GDPRSection'

export default function GDPRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <GDPRSection />
      <Footer />
    </main>
  )
}
