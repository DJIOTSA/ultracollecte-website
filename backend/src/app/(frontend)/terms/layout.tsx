import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions d\'utilisation - UltraCollecte | CGU',
  description: 'Consultez nos conditions générales d\'utilisation qui régissent l\'usage de la plateforme UltraCollecte.',
  keywords: ['CGU', 'conditions utilisation', 'termes', 'légal', 'contrat'],
  openGraph: {
    title: 'Conditions d\'utilisation - UltraCollecte',
    description: 'Conditions générales d\'utilisation de UltraCollecte',
    type: 'website',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
