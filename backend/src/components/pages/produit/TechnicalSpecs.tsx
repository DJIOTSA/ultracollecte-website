'use client';

import { motion } from 'framer-motion';
import { Server, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react';

const specs = [
  {
    category: "Infrastructure",
    icon: Server,
    color: "from-blue-500 to-blue-600",
    items: [
      { label: "Disponibilité", value: "99.9% SLA garanti" },
      { label: "Hébergement", value: "Cloud multi-zones" },
      { label: "Sauvegarde", value: "Temps réel + quotidienne" },
      { label: "Récupération", value: "RTO < 4h, RPO < 1h" }
    ]
  },
  {
    category: "Performance",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    items: [
      { label: "Temps de réponse", value: "< 200ms moyenne" },
      { label: "Débit", value: "10,000 req/sec" },
      { label: "Utilisateurs", value: "Illimité concurrent" },
      { label: "Données", value: "Jusqu'à 10TB par client" }
    ]
  },
  {
    category: "Sécurité",
    icon: Shield,
    color: "from-red-500 to-red-600",
    items: [
      { label: "Chiffrement", value: "AES-256 en transit/repos" },
      { label: "Authentification", value: "OAuth 2.0 + 2FA" },
      { label: "Conformité", value: "RGPD, ISO 27001" },
      { label: "Audit", value: "Logs complets 2 ans" }
    ]
  },
  {
    category: "Compatibilité",
    icon: Smartphone,
    color: "from-green-500 to-green-600",
    items: [
      { label: "Mobile", value: "iOS 12+, Android 8+" },
      { label: "Web", value: "Chrome, Firefox, Safari" },
      { label: "API", value: "REST + GraphQL" },
      { label: "Formats", value: "JSON, XML, CSV" }
    ]
  },
  {
    category: "Intégration",
    icon: Globe,
    color: "from-purple-500 to-purple-600",
    items: [
      { label: "Webhooks", value: "Temps réel" },
      { label: "SDK", value: "JS, Python, PHP, Java" },
      { label: "Connecteurs", value: "50+ systèmes" },
      { label: "Import/Export", value: "Batch et streaming" }
    ]
  },
  {
    category: "Base de Données",
    icon: Database,
    color: "from-indigo-500 to-indigo-600",
    items: [
      { label: "Type", value: "PostgreSQL cluster" },
      { label: "Réplication", value: "Multi-maître" },
      { label: "Backup", value: "Point-in-time recovery" },
      { label: "Encryption", value: "Transparent Data Encryption" }
    ]
  }
];

const requirements = {
  minimum: [
    "Connexion internet 1 Mbps",
    "Navigateur moderne (Chrome 90+)",
    "Mobile iOS 12+ ou Android 8+",
    "Résolution écran 1024x768"
  ],
  recommended: [
    "Connexion internet 5 Mbps",
    "Navigateur récent avec JavaScript",
    "Mobile récent (< 3 ans)",
    "Résolution écran 1920x1080"
  ]
};

export function TechnicalSpecs() {
  return (
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
            Spécifications{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Techniques
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les détails techniques de notre infrastructure robuste et performante.
          </p>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mr-4`}>
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{spec.category}</h3>
              </div>
              
              <div className="space-y-4">
                {spec.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600 font-medium">{item.label}</span>
                    <span className="text-gray-900 font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Configuration Requise
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                Configuration Minimale
              </h4>
              <ul className="space-y-3">
                {requirements.minimum.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                Configuration Recommandée
              </h4>
              <ul className="space-y-3">
                {requirements.recommended.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Architecture Système</h3>
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Applications Mobiles</h4>
                <p className="text-sm text-gray-600">iOS & Android natif</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">API Gateway</h4>
                <p className="text-sm text-gray-600">Load balancer + sécurité</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Base de Données</h4>
                <p className="text-sm text-gray-600">PostgreSQL cluster</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}