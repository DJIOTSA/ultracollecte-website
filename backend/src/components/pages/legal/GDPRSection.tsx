'use client';

import { motion } from 'framer-motion';
import { Eye, UserCheck, Download, Trash2, Edit, ArrowRight } from 'lucide-react';

const gdprRights = [
  {
    icon: Eye,
    title: "Droit d'Accès",
    description: "Vous pouvez demander une copie de toutes les données personnelles que nous détenons sur vous.",
    action: "Demander mes données"
  },
  {
    icon: Edit,
    title: "Droit de Rectification",
    description: "Vous pouvez demander la correction de données inexactes ou incomplètes.",
    action: "Corriger mes données"
  },
  {
    icon: Trash2,
    title: "Droit à l'Effacement",
    description: "Vous pouvez demander la suppression de vos données dans certaines conditions.",
    action: "Supprimer mes données"
  },
  {
    icon: Download,
    title: "Droit à la Portabilité",
    description: "Vous pouvez récupérer vos données dans un format structuré et lisible.",
    action: "Exporter mes données"
  },
  {
    icon: UserCheck,
    title: "Droit d'Opposition",
    description: "Vous pouvez vous opposer au traitement de vos données pour certaines finalités.",
    action: "M'opposer au traitement"
  },
  {
    icon: ArrowRight,
    title: "Droit de Limitation",
    description: "Vous pouvez demander la limitation du traitement dans certains cas.",
    action: "Limiter le traitement"
  }
];

const dataCategories = [
  {
    category: "Données d'Identification",
    items: ["Nom, prénom", "Adresse email", "Numéro de téléphone", "Adresse postale"],
    retention: "Durée du contrat + 3 ans"
  },
  {
    category: "Données de Connexion",
    items: ["Adresse IP", "Logs de connexion", "Données de navigation", "Préférences"],
    retention: "13 mois maximum"
  },
  {
    category: "Données Transactionnelles",
    items: ["Historique des collectes", "Montants", "Dates", "Statuts"],
    retention: "10 ans (obligation légale)"
  },
  {
    category: "Données Techniques",
    items: ["Métadonnées", "Performances", "Erreurs", "Utilisation"],
    retention: "2 ans maximum"
  }
];

export function GDPRSection() {
  return (
    <section id="gdpr" className="py-16 md:py-24 bg-white">
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
            Conformité{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              RGPD
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous respectons scrupuleusement le Règlement Général sur la Protection des Données et vous garantissons le plein exercice de vos droits.
          </p>
        </motion.div>

        {/* GDPR Rights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {gdprRights.map((right, index) => (
            <motion.div
              key={right.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-green-200 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <right.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{right.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{right.description}</p>
              <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                {right.action}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Data Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Catégories de Données Traitées</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {dataCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h4>
                <ul className="space-y-2 mb-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm font-medium text-gray-900">Conservation : </span>
                  <span className="text-sm text-gray-600">{category.retention}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact DPO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Délégué à la Protection des Données</h3>
            <p className="text-green-100 mb-6">
              Pour exercer vos droits ou pour toute question relative à la protection de vos données personnelles, contactez notre DPO.
            </p>
            <div className="space-y-2 text-green-100 mb-6">
              <div>📧 dpo@collectpro.com</div>
              <div>📮 DPO - UltraCollecte, 123 Avenue des Champs-Élysées, 75008 Paris</div>
            </div>
            <p className="text-sm text-green-200">
              Nous nous engageons à répondre à votre demande dans un délai maximum de 30 jours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
