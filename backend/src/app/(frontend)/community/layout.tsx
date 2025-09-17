import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Communauté - UltraCollecte | Rejoignez notre communauté',
  description: 'Rejoignez une communauté dynamique de professionnels de la microfinance et partagez vos expériences.',
  keywords: ['communauté', 'réseau', 'professionnels', 'microfinance', 'échanges', 'partage'],
  openGraph: {
    title: 'Communauté - UltraCollecte | Réseau professionnel',
    description: 'Communauté de professionnels de la microfinance',
    type: 'website',
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
