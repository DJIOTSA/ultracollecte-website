import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - UltraCollecte | Contactez notre équipe',
  description: 'Contactez notre équipe pour toute question, demande de démo ou support. Nous sommes là pour vous accompagner.',
  keywords: ['contact', 'support', 'équipe', 'aide', 'démo', 'questions'],
  openGraph: {
    title: 'Contact - UltraCollecte | Nous contacter',
    description: 'Notre équipe est à votre disposition pour répondre à vos questions',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
