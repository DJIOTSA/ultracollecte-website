import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partenaires - UltraCollecte | Nos partenaires technologiques et financiers',
  description: 'Découvrez nos partenaires technologiques, financiers et institutionnels qui nous accompagnent dans notre mission.',
  keywords: ['partenaires', 'partenariats', 'technologie', 'finance', 'institutions'],
  openGraph: {
    title: 'Partenaires - UltraCollecte | Écosystème de partenaires',
    description: 'Collaborations avec les leaders de l\'industrie fintech',
    type: 'website',
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
