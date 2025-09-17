import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intégrations - UltraCollecte | Connectez vos systèmes existants',
  description: 'Intégrez UltraCollecte avec vos systèmes bancaires, comptables et de paiement. Plus de 50 connecteurs disponibles.',
  keywords: ['intégrations', 'connecteurs', 'systèmes bancaires', 'API', 'paiements mobile', 'comptabilité'],
  openGraph: {
    title: 'Intégrations - UltraCollecte | Connectez vos systèmes',
    description: 'Plus de 50 intégrations natives avec les systèmes les plus utilisés',
    type: 'website',
  },
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
