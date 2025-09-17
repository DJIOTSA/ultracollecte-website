import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { AboutSection } from '@/components/pages/entreprise/AboutSection'
import { ValuesSection } from '@/components/pages/entreprise/ValuesSection'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AboutSection />
      <ValuesSection />
      <Footer />
    </main>
  )
}
