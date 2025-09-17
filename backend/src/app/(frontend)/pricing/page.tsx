import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { PricingSection } from '@/components/sections/PricingSection'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <PricingSection />
      </div>
      <Footer />
    </main>
  )
}
