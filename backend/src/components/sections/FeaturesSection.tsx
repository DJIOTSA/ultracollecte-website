'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContactRound, Smartphone, PieChart, Shield, Clock, MapPin } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { ContactForm } from '@/components/forms/ContactForm';

const features = [
  {
    icon: ContactRound,
    title: "Gestion Centralisée des Clients",
    description: "Suivez les portefeuilles, historiques et statuts (actif/inactif/blacklisté) de tous vos clients depuis une interface unique et intuitive.",
    benefits: ["Base de données centralisée", "Historique complet", "Statuts en temps réel"]
  },
  {
    icon: Smartphone,
    title: "Collecte Mobile Sécurisée",
    description: "Enregistrement des transactions avec géolocalisation et signatures électroniques pour une traçabilité complète des opérations.",
    benefits: ["Géolocalisation GPS", "Signatures numériques", "Mode hors-ligne"]
  },
  {
    icon: PieChart,
    title: "Rapports Financiers Automatisés",
    description: "Générez automatiquement les soldes clients, rapports de collecte et règlements journaliers avec exports PDF et Excel.",
    benefits: ["Rapports automatiques", "Exports multiples", "Tableaux de bord"]
  },
  {
    icon: Shield,
    title: "Sécurité Bancaire",
    description: "Chiffrement AES-256, conformité RGPD et authentification multi-facteurs pour protéger vos données sensibles.",
    benefits: ["Chiffrement AES-256", "Conformité RGPD", "Authentification 2FA"]
  },
  {
    icon: Clock,
    title: "Synchronisation Temps Réel",
    description: "Synchronisation instantanée des données entre tous les appareils et agents pour une coordination parfaite des équipes.",
    benefits: ["Sync instantanée", "Multi-appareils", "Coordination équipes"]
  },
  {
    icon: MapPin,
    title: "Géolocalisation Avancée",
    description: "Suivi GPS des agents, vérification des lieux de collecte et optimisation des tournées pour maximiser l'efficacité.",
    benefits: ["Tracking GPS", "Vérification lieux", "Optimisation routes"]
  }
];

export function FeaturesSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Fonctionnalités{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Avancées
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez tous les outils dont vous avez besoin pour transformer vos opérations de microfinance et améliorer vos performances.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Prêt à transformer vos opérations ?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Rejoignez plus de 100 institutions de microfinance qui font déjà confiance à notre solution.
              </p>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-accent btn-lg hover:scale-105 transition-transform"
              >
                Demander une démo personnalisée
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Demander une démo"
      >
        <ContactForm 
          onClose={() => setIsContactModalOpen(false)}
          title="Demander une démo personnalisée"
          subtitle="Notre équipe vous présentera la solution adaptée à vos besoins"
        />
      </Modal>
    </>
  );
}