import { Metadata } from 'next';
import { LegalHero } from '@/components/pages/legal/LegalHero';
import { PrivacySection } from '@/components/pages/legal/PrivacySection';
import { TermsSection } from '@/components/pages/legal/TermsSection';
import { GDPRSection } from '@/components/pages/legal/GDPRSection';
import { CookiesSection } from '@/components/pages/legal/CookiesSection';
import { ContactLegalSection } from '@/components/pages/legal/ContactLegalSection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Mentions Légales - UltraCollecte | Politique de confidentialité et CGU',
  description: 'Consultez nos mentions légales, politique de confidentialité, conditions générales d\'utilisation et informations sur la conformité RGPD.',
  keywords: ['mentions légales', 'politique de confidentialité', 'CGU', 'RGPD', 'cookies'],
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <LegalHero />
      <PrivacySection />
      <TermsSection />
      <GDPRSection />
      <CookiesSection />
      <ContactLegalSection />
      <Footer />
    </main>
  );
}
