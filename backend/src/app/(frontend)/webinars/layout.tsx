import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webinaires - UltraCollecte | Formations en ligne gratuites',
  description: 'Participez à nos webinaires gratuits pour développer votre expertise en microfinance digitale.',
  keywords: ['webinaires', 'formations', 'en ligne', 'expertise', 'microfinance digitale'],
  openGraph: {
    title: 'Webinaires - UltraCollecte | Formations en ligne',
    description: 'Formations gratuites avec des experts de la microfinance',
    type: 'website',
  },
};

export default function WebinarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
