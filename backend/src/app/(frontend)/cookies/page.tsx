import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { CookiesSection } from '@/components/pages/legal/CookiesSection'

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CookiesSection />
      <Footer />
    </main>
  )
}
