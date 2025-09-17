import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Documentation - UltraCollecte | Intégrez notre solution dans vos systèmes',
  description: 'Documentation complète de l\'API UltraCollecte avec exemples de code, SDKs et guides d\'intégration pour développeurs.',
  keywords: ['API', 'documentation', 'développeurs', 'intégration', 'SDK', 'webhooks'],
  openGraph: {
    title: 'API Documentation - UltraCollecte | Pour développeurs',
    description: 'API REST complète avec documentation interactive et SDKs',
    type: 'website',
  },
};

export default function APILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
