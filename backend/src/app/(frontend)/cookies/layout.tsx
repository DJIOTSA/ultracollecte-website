import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gestion des cookies - UltraCollecte | Préférences cookies',
  description: 'Gérez vos préférences de cookies et découvrez comment nous utilisons les cookies sur notre site.',
  keywords: ['cookies', 'préférences', 'gestion', 'tracking', 'analytics'],
  openGraph: {
    title: 'Gestion des cookies - UltraCollecte',
    description: 'Personnalisez vos préférences de cookies',
    type: 'website',
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
