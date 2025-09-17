import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { APISection } from '@/components/pages/produit/APISection'

export default function APIPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <APISection />
      <Footer />
    </main>
  )
}
