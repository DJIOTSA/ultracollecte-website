'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Zap, Database, CreditCard, FileText, BarChart3, Mail, MessageSquare, Globe } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { ContactForm } from '@/components/forms/ContactForm';

const integrations = [
  {
    category: "Systèmes Bancaires",
    icon: Database,
    color: "from-blue-500 to-blue-600",
    items: [
      { name: "Core Banking Systems", description: "Intégration directe avec les CBS majeurs" },
      { name: "SWIFT", description: "Virements internationaux sécurisés" },
      { name: "SEPA", description: "Paiements européens automatisés" },
      { name: "Open Banking", description: "APIs bancaires standardisées" }
    ]
  },
  {
    category: "Paiements Mobile",
    icon: CreditCard,
    color: "from-green-500 to-green-600",
    items: [
      { name: "Orange Money", description: "Paiements mobile Orange" },
      { name: "MTN Mobile Money", description: "Solution MTN pour l'Afrique" },
      { name: "Airtel Money", description: "Portefeuille mobile Airtel" },
      { name: "Wave", description: "Transferts d'argent digitaux" }
    ]
  },
  {
    category: "Comptabilité",
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
    items: [
      { name: "SAP", description: "ERP et comptabilité d'entreprise" },
      { name: "Sage", description: "Gestion comptable et financière" },
      { name: "QuickBooks", description: "Comptabilité pour PME" },
      { name: "Odoo", description: "Suite de gestion intégrée" }
    ]
  },
  {
    category: "Communication",
    icon: MessageSquare,
    color: "from-orange-500 to-orange-600",
    items: [
      { name: "SMS Gateways", description: "Envoi de SMS en masse" },
      { name: "WhatsApp Business", description: "Messages WhatsApp automatisés" },
      { name: "Email Marketing", description: "Campagnes email personnalisées" },
      { name: "Push Notifications", description: "Notifications mobiles" }
    ]
  }
];

const apiFeatures = [
  {
    title: "API REST Complète",
    description: "Accès programmatique à toutes les fonctionnalités de UltraCollecte",
    features: ["Authentification OAuth 2.0", "Rate limiting intelligent", "Webhooks temps réel", "Documentation interactive"]
  },
  {
    title: "SDK Développeur",
    description: "Kits de développement pour une intégration rapide",
    features: ["JavaScript/Node.js", "Python", "PHP", "Java/Android"]
  },
  {
    title: "Webhooks",
    description: "Notifications automatiques des événements importants",
    features: ["Nouvelles collectes", "Changements de statut", "Alertes de sécurité", "Rapports générés"]
  }
];

export function IntegrationsSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="integrations" className="py-16 md:py-24 bg-gray-50">
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
              Intégrations{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Puissantes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connectez UltraCollecte à votre écosystème existant grâce à nos intégrations natives et APIs complètes.
            </p>
          </motion.div>

          {/* Integrations Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {integrations.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* API Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                API et Outils Développeur
              </h3>
              <p className="text-primary-100 max-w-2xl mx-auto text-lg">
                Construisez des intégrations personnalisées avec nos outils développeur complets.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-primary-100 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-primary-100">
                        <Zap className="w-4 h-4 mr-2 text-accent-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <Globe className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'une Intégration Personnalisée ?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe technique peut développer des connecteurs sur mesure pour vos systèmes spécifiques.
              </p>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary btn-lg"
              >
                Discuter de votre projet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Intégration personnalisée"
      >
        <ContactForm 
          onClose={() => setIsContactModalOpen(false)}
          title="Demande d'intégration personnalisée"
          subtitle="Décrivez-nous vos besoins d'intégration et nous vous proposerons une solution sur mesure"
        />
      </Modal>
    </>
  );
}
