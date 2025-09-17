import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité - UltraCollecte | Protection de vos données',
  description: 'Notre politique de confidentialité détaille comment nous collectons, utilisons et protégeons vos données personnelles.',
  keywords: ['confidentialité', 'données personnelles', 'protection', 'RGPD', 'vie privée'],
  openGraph: {
    title: 'Politique de confidentialité - UltraCollecte',
    description: 'Comment nous protégeons vos données personnelles',
    type: 'website',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
