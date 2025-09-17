import type { Metadata } from 'next'
import './../global.css'

export const metadata: Metadata = {
  title: 'UltraCollecte - Solution Digitale de Collecte Journalière pour IMF',
  description:
    'Automatisez le suivi des remboursements et optimisez vos opérations de microfinance avec notre plateforme tout-en-un sécurisée.',
  keywords: [
    'microfinance',
    'collecte journalière',
    'IMF',
    'fintech',
    'gestion clients',
    'recouvrement',
  ],
  authors: [{ name: 'UltraCollecte Team' }],
  openGraph: {
    title: 'UltraCollecte - Solution Digitale de Collecte Journalière pour IMF',
    description:
      'Automatisez le suivi des remboursements et optimisez vos opérations de microfinance',
    type: 'website',
    locale: 'fr_FR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
