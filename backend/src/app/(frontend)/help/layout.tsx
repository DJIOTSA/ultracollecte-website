import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centre d\'aide - UltraCollecte | Support et documentation',
  description: 'Trouvez rapidement des réponses à vos questions dans notre centre d\'aide complet avec guides et tutoriels.',
  keywords: ['aide', 'support', 'documentation', 'guides', 'tutoriels', 'FAQ'],
  openGraph: {
    title: 'Centre d\'aide - UltraCollecte | Support',
    description: 'Documentation complète et support pour utiliser UltraCollecte',
    type: 'website',
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
