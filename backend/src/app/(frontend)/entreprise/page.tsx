import { Metadata } from 'next';
import { EntrepriseHero } from '@/components/pages/entreprise/EntrepriseHero';
import { AboutSection } from '@/components/pages/entreprise/AboutSection';
import { TeamSection } from '@/components/pages/entreprise/TeamSection';
import { ValuesSection } from '@/components/pages/entreprise/ValuesSection';
import { CareersSection } from '@/components/pages/entreprise/CareersSection';
import { PressSection } from '@/components/pages/entreprise/PressSection';
import { CTASection } from '@/components/sections/CTASection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Entreprise - UltraCollecte | À propos de notre équipe et mission',
  description: 'Découvrez UltraCollecte : notre mission, notre équipe, nos valeurs et notre engagement envers l\'innovation dans la microfinance digitale.',
  keywords: ['à propos', 'équipe', 'mission', 'valeurs', 'carrières', 'microfinance'],
};

export default function EntreprisePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <EntrepriseHero />
      <AboutSection />
      <ValuesSection />
      <TeamSection />
      <CareersSection />
      <PressSection />
      <CTASection />
      <Footer />
    </main>
  );
}
