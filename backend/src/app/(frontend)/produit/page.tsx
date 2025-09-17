import { Metadata } from 'next';
import { ProduitHero } from '@/components/pages/produit/ProduitHero';
import { FeaturesDetailed } from '@/components/pages/produit/FeaturesDetailed';
import { SecuritySection } from '@/components/pages/produit/SecuritySection';
import { IntegrationsSection } from '@/components/pages/produit/IntegrationsSection';
import { APISection } from '@/components/pages/produit/APISection';
import { TechnicalSpecs } from '@/components/pages/produit/TechnicalSpecs';
import { CTASection } from '@/components/sections/CTASection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Produit - UltraCollecte | Solution de Collecte Journalière pour IMF',
  description: 'Découvrez toutes les fonctionnalités de UltraCollecte : gestion centralisée, collecte mobile, rapports automatisés, sécurité bancaire et intégrations.',
  keywords: ['fonctionnalités', 'collecte mobile', 'sécurité', 'API', 'intégrations', 'microfinance'],
};

export default function ProduitPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProduitHero />
      <FeaturesDetailed />
      <SecuritySection />
      <IntegrationsSection />
      <APISection />
      <TechnicalSpecs />
      <CTASection />
      <Footer />
    </main>
  );
}
