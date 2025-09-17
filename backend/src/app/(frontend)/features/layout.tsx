import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fonctionnalités - UltraCollecte | Outils avancés de collecte journalière',
  description: 'Découvrez toutes les fonctionnalités de UltraCollecte : gestion centralisée des clients, collecte mobile, rapports automatisés, sécurité bancaire et plus.',
  keywords: ['fonctionnalités', 'collecte mobile', 'gestion clients', 'rapports automatisés', 'sécurité', 'microfinance'],
  openGraph: {
    title: 'Fonctionnalités - UltraCollecte | Outils avancés de collecte journalière',
    description: 'Découvrez toutes les fonctionnalités de UltraCollecte pour optimiser vos opérations de microfinance',
    type: 'website',
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
