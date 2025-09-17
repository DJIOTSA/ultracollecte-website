'use client';

import { motion } from 'framer-motion';
import { 
  ContactRound, 
  Smartphone, 
  PieChart, 
  Shield, 
  Clock, 
  MapPin,
  FileText,
  CreditCard,
  Users,
  BarChart3,
  Settings,
  Wifi
} from 'lucide-react';

const features = [
  {
    icon: ContactRound,
    title: "Gestion Centralisée des Clients",
    description: "Base de données unifiée pour tous vos clients avec historiques complets et statuts en temps réel.",
    details: [
      "Profils clients détaillés avec photos",
      "Historique complet des transactions",
      "Statuts dynamiques (actif/inactif/blacklisté)",
      "Recherche avancée et filtres",
      "Import/export de données clients"
    ],
    color: "from-primary-500 to-primary-600"
  },
  {
    icon: Smartphone,
    title: "Applications Mobile Natives",
    description: "Applications iOS et Android optimisées pour la collecte sur le terrain avec mode hors-ligne.",
    details: [
      "Interface intuitive et rapide",
      "Mode hors-ligne complet",
      "Synchronisation automatique",
      "Notifications push",
      "Support multi-langues"
    ],
    color: "from-secondary-500 to-secondary-600"
  },
  {
    icon: PieChart,
    title: "Rapports et Analytics",
    description: "Tableaux de bord interactifs et rapports automatisés pour un suivi précis de vos performances.",
    details: [
      "Tableaux de bord personnalisables",
      "Rapports automatisés quotidiens",
      "Exports PDF et Excel",
      "Analyses prédictives",
      "KPIs en temps réel"
    ],
    color: "from-accent-500 to-accent-600"
  },
  {
    icon: Shield,
    title: "Sécurité de Niveau Bancaire",
    description: "Protection maximale de vos données avec chiffrement AES-256 et conformité RGPD.",
    details: [
      "Chiffrement AES-256",
      "Authentification multi-facteurs",
      "Conformité RGPD complète",
      "Audits de sécurité réguliers",
      "Sauvegarde automatique"
    ],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Clock,
    title: "Synchronisation Temps Réel",
    description: "Données synchronisées instantanément entre tous les appareils et utilisateurs.",
    details: [
      "Sync en temps réel",
      "Résolution automatique des conflits",
      "Historique des modifications",
      "Notifications de changements",
      "Backup continu"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: MapPin,
    title: "Géolocalisation Avancée",
    description: "Suivi GPS précis des agents et vérification automatique des lieux de collecte.",
    details: [
      "Tracking GPS en temps réel",
      "Géofencing intelligent",
      "Optimisation des tournées",
      "Historique des déplacements",
      "Alertes de sécurité"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    icon: FileText,
    title: "Gestion Documentaire",
    description: "Stockage sécurisé et organisation de tous vos documents clients et contractuels.",
    details: [
      "Stockage cloud sécurisé",
      "Signatures électroniques",
      "Versioning des documents",
      "Recherche full-text",
      "Archivage automatique"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: CreditCard,
    title: "Gestion des Paiements",
    description: "Traitement sécurisé des transactions avec support de multiples méthodes de paiement.",
    details: [
      "Paiements mobile money",
      "Transactions en espèces",
      "Virements bancaires",
      "Réconciliation automatique",
      "Gestion des devises"
    ],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Gestion d'Équipe",
    description: "Outils complets pour gérer vos agents de collecte et leurs performances.",
    details: [
      "Profils agents détaillés",
      "Attribution des portefeuilles",
      "Suivi des performances",
      "Système de commissions",
      "Formation intégrée"
    ],
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Analyses avancées et insights pour optimiser vos stratégies de collecte.",
    details: [
      "Analyses prédictives",
      "Segmentation clients",
      "Scoring de risque",
      "Recommandations IA",
      "Benchmarking"
    ],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Settings,
    title: "Configuration Flexible",
    description: "Personnalisez la plateforme selon vos processus métier spécifiques.",
    details: [
      "Workflows personnalisables",
      "Champs personnalisés",
      "Règles métier configurables",
      "Templates de documents",
      "Intégrations sur mesure"
    ],
    color: "from-gray-500 to-gray-600"
  },
  {
    icon: Wifi,
    title: "API et Intégrations",
    description: "Connectez UltraCollecte à vos systèmes existants via nos APIs REST complètes.",
    details: [
      "API REST complète",
      "Webhooks en temps réel",
      "SDK pour développeurs",
      "Connecteurs pré-construits",
      "Documentation complète"
    ],
    color: "from-pink-500 to-pink-600"
  }
];

export function FeaturesDetailed() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
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
              Complètes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez en détail tous les outils et fonctionnalités qui font de UltraCollecte la solution la plus complète du marché.
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
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
