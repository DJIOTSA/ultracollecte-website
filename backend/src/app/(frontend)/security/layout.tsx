import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sécurité - UltraCollecte | Protection de niveau bancaire pour vos données',
  description: 'Découvrez nos mesures de sécurité avancées : chiffrement AES-256, conformité RGPD, certifications ISO 27001 et audits réguliers.',
  keywords: ['sécurité', 'chiffrement', 'RGPD', 'ISO 27001', 'protection données', 'conformité'],
  openGraph: {
    title: 'Sécurité - UltraCollecte | Protection de niveau bancaire',
    description: 'Sécurité de niveau bancaire pour protéger vos données financières sensibles',
    type: 'website',
  },
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
