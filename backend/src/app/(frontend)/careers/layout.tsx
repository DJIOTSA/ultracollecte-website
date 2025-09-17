import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrières - UltraCollecte | Rejoignez notre équipe',
  description: 'Découvrez nos offres d\'emploi et rejoignez une équipe passionnée qui révolutionne la microfinance en Afrique.',
  keywords: ['carrières', 'emploi', 'recrutement', 'équipe', 'fintech', 'Afrique'],
  openGraph: {
    title: 'Carrières - UltraCollecte | Rejoignez l\'aventure',
    description: 'Construisez l\'avenir de la fintech africaine avec nous',
    type: 'website',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
