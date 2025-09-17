'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Shield, Users } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "70%",
    label: "Réduction du temps de collecte",
    description: "Automatisation des processus",
    color: "from-primary-500 to-primary-600"
  },
  {
    icon: Clock,
    value: "24h",
    label: "Synchronisation des données",
    description: "En temps réel",
    color: "from-secondary-500 to-secondary-600"
  },
  {
    icon: Shield,
    value: "99%",
    label: "Transactions sécurisées",
    description: "Chiffrement bancaire",
    color: "from-accent-500 to-accent-600"
  },
  {
    icon: Users,
    value: "100+",
    label: "Institutions partenaires",
    description: "Confiance établie",
    color: "from-purple-500 to-pink-600"
  }
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            Des Résultats{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Mesurables
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos clients témoignent de l'impact concret de notre solution sur leurs performances operationnelles.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Value */}
                <div className="relative mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </motion.div>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className={`w-full h-full bg-gradient-to-br ${stat.color} rounded-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Performance moyenne de nos clients
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">+40%</div>
                <p className="text-gray-600 text-sm">Augmentation du taux de recouvrement</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-600 mb-2">-60%</div>
                <p className="text-gray-600 text-sm">Réduction des erreurs de saisie</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-600 mb-2">x3</div>
                <p className="text-gray-600 text-sm">Vitesse de traitement des données</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}