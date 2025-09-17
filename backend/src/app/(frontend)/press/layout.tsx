import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Presse - UltraCollecte | Actualités et communiqués de presse',
  description: 'Retrouvez nos dernières actualités, communiqués de presse et ressources média. Kit presse disponible.',
  keywords: ['presse', 'actualités', 'communiqués', 'média', 'kit presse', 'news'],
  openGraph: {
    title: 'Presse - UltraCollecte | Espace presse',
    description: 'Actualités et ressources média de UltraCollecte',
    type: 'website',
  },
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
