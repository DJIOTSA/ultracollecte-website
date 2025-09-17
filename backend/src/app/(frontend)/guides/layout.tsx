import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides - UltraCollecte | Guides pratiques et formations',
  description: 'Téléchargez nos guides pratiques pour maîtriser UltraCollecte et optimiser vos opérations de microfinance.',
  keywords: ['guides', 'formations', 'tutoriels', 'manuels', 'apprentissage', 'optimisation'],
  openGraph: {
    title: 'Guides - UltraCollecte | Guides pratiques',
    description: 'Guides détaillés pour maîtriser toutes les fonctionnalités',
    type: 'website',
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
