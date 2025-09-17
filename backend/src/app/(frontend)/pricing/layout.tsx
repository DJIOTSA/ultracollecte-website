import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarification - UltraCollecte | Plans et prix pour institutions de microfinance',
  description: 'Découvrez nos plans tarifaires flexibles adaptés à votre institution. Essai gratuit de 14 jours, sans engagement.',
  keywords: ['tarification', 'prix', 'plans', 'abonnement', 'essai gratuit', 'microfinance'],
  openGraph: {
    title: 'Tarification - UltraCollecte | Plans et prix pour institutions de microfinance',
    description: 'Plans tarifaires flexibles pour toutes les tailles d\'institutions de microfinance',
    type: 'website',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
