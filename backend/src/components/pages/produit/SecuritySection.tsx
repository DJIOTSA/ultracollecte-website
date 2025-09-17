'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck, Server, AlertTriangle } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: "Chiffrement AES-256",
    description: "Toutes vos données sont protégées par un chiffrement de niveau militaire, le même standard utilisé par les banques centrales."
  },
  {
    icon: Lock,
    title: "Authentification Multi-Facteurs",
    description: "Sécurité renforcée avec 2FA obligatoire pour tous les accès administrateur et optionnel pour les utilisateurs."
  },
  {
    icon: Eye,
    title: "Conformité RGPD",
    description: "Respect total du règlement européen sur la protection des données avec outils de gestion des consentements."
  },
  {
    icon: FileCheck,
    title: "Audits de Sécurité",
    description: "Audits de sécurité trimestriels par des experts indépendants avec rapports de conformité détaillés."
  },
  {
    icon: Server,
    title: "Infrastructure Sécurisée",
    description: "Hébergement sur des serveurs certifiés ISO 27001 avec redondance géographique et sauvegarde continue."
  },
  {
    icon: AlertTriangle,
    title: "Monitoring 24/7",
    description: "Surveillance continue des accès et détection automatique des tentatives d'intrusion avec alertes immédiates."
  }
];

const certifications = [
  { name: "ISO 27001", description: "Gestion de la sécurité de l'information" },
  { name: "SOC 2 Type II", description: "Contrôles de sécurité et disponibilité" },
  { name: "RGPD", description: "Protection des données personnelles" },
  { name: "PCI DSS", description: "Sécurité des données de cartes de paiement" }
];

export function SecuritySection() {
  return (
    <section id="security" className="py-16 md:py-24 bg-white">
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
            Sécurité de{' '}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Niveau Bancaire
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La sécurité de vos données financières est notre priorité absolue. Découvrez nos mesures de protection avancées.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-red-200 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Certifications et Conformité
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous respectons les standards internationaux les plus stricts en matière de sécurité et de protection des données.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Notre Engagement Sécurité
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              "Nous nous engageons à protéger vos données avec le même niveau de sécurité que les institutions financières les plus exigeantes au monde."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span>99.9% de disponibilité garantie</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Lock className="w-5 h-5" />
                <span>Zéro faille de sécurité depuis 2020</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}