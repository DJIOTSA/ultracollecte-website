import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - UltraCollecte | Notre mission et notre équipe',
  description: 'Découvrez l\'histoire de UltraCollecte, notre mission de démocratiser l\'accès aux services financiers en Afrique et notre équipe passionnée.',
  keywords: ['à propos', 'mission', 'équipe', 'histoire', 'valeurs', 'microfinance Afrique'],
  openGraph: {
    title: 'À propos - UltraCollecte | Notre mission',
    description: 'Révolutionner la microfinance digitale en Afrique depuis 2020',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
