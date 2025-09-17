import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RGPD - UltraCollecte | Conformité et droits des utilisateurs',
  description: 'Informations sur notre conformité RGPD et vos droits concernant vos données personnelles.',
  keywords: ['RGPD', 'conformité', 'droits', 'données personnelles', 'DPO'],
  openGraph: {
    title: 'RGPD - UltraCollecte | Conformité européenne',
    description: 'Notre engagement pour la protection de vos données',
    type: 'website',
  },
};

export default function GDPRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
