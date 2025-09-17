'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';

const privacyPoints = [
  {
    icon: Database,
    title: "Collecte des Données",
    content: "Nous collectons uniquement les données nécessaires au fonctionnement de notre service : informations de compte, données de transaction, et métadonnées techniques pour améliorer nos services."
  },
  {
    icon: Lock,
    title: "Utilisation des Données",
    content: "Vos données sont utilisées exclusivement pour fournir nos services, améliorer l'expérience utilisateur, assurer la sécurité de la plateforme et respecter nos obligations légales."
  },
  {
    icon: Shield,
    title: "Protection des Données",
    content: "Toutes les données sont chiffrées en transit et au repos avec AES-256. Nos serveurs sont hébergés dans des centres de données certifiés ISO 27001 avec accès restreint."
  },
  {
    icon: UserCheck,
    title: "Vos Droits",
    content: "Vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition concernant vos données personnelles, conformément au RGPD."
  },
  {
    icon: Eye,
    title: "Partage des Données",
    content: "Nous ne vendons jamais vos données. Le partage est limité aux partenaires techniques nécessaires au service, sous contrat de confidentialité strict."
  },
  {
    icon: AlertCircle,
    title: "Conservation des Données",
    content: "Les données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, puis supprimées de manière sécurisée."
  }
];

export function PrivacySection() {
  return (
    <section id="privacy" className="py-16 md:py-24 bg-white">
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
            Politique de{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Confidentialité
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles avec le plus grand soin.
          </p>
        </motion.div>

        {/* Privacy Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {privacyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Privacy Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Politique Détaillée</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">1. Responsable du Traitement</h4>
              <p className="text-gray-600 leading-relaxed">
                UltraCollecte SAS, société par actions simplifiée au capital de 100 000 euros, immatriculée au RCS de Paris sous le numéro 123 456 789, dont le siège social est situé 123 Avenue des Champs-Élysées, 75008 Paris, France.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">2. Finalités du Traitement</h4>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li>• Fourniture et amélioration de nos services de collecte journalière</li>
                <li>• Gestion des comptes utilisateurs et authentification</li>
                <li>• Support client et assistance technique</li>
                <li>• Analyse et amélioration de nos services</li>
                <li>• Respect de nos obligations légales et réglementaires</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">3. Base Légale</h4>
              <p className="text-gray-600 leading-relaxed">
                Le traitement de vos données personnelles est fondé sur l'exécution du contrat de service, votre consentement pour certaines finalités spécifiques, et nos intérêts légitimes pour l'amélioration de nos services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">4. Durée de Conservation</h4>
              <p className="text-gray-600 leading-relaxed">
                Les données de compte sont conservées pendant toute la durée de votre utilisation du service, puis archivées pendant 3 ans après la fermeture du compte. Les données de transaction sont conservées 10 ans conformément aux obligations comptables.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">5. Exercice de vos Droits</h4>
              <p className="text-gray-600 leading-relaxed">
                Pour exercer vos droits ou pour toute question relative à cette politique, contactez notre Délégué à la Protection des Données à l'adresse : dpo@collectpro.com ou par courrier à l'adresse de notre siège social.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
