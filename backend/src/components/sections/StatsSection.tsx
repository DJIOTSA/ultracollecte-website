'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Shield, Users, Sparkles, ArrowUpRight } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: "70%",
    label: "Réduction du temps de collecte",
    description: "Automatisation des processus",
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50"
  },
  {
    icon: Clock,
    value: "24h",
    label: "Synchronisation des données",
    description: "En temps réel",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    icon: Shield,
    value: "99%",
    label: "Transactions sécurisées",
    description: "Chiffrement bancaire",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    icon: Users,
    value: "100+",
    label: "Institutions partenaires",
    description: "Confiance établie",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50"
  }
];

const additionalStats = [
  { label: "Augmentation du taux de recouvrement", value: "+40%" },
  { label: "Réduction des erreurs de saisie", value: "-60%" },
  { label: "Vitesse de traitement des données", value: "x3" }
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold text-gray-700">Résultats Prouvés</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Des Résultats{' '}
            <span className="gradient-text">
              Mesurables
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Nos clients témoignent de l'impact concret de notre solution sur leurs performances opérationnelles.
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gray-200 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Value */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                    className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
                  >
                    {stat.value}
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-medium">
                    {stat.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: index === 0 ? 1 : 0,
                      y: index === 0 ? 0 : 10
                    }}
                    className="absolute top-6 right-6"
                  >
                    <ArrowUpRight className="w-6 h-6 text-emerald-600" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-3xl p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-8">
                Performance moyenne de nos clients
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-8">
                {additionalStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="text-center group"
                  >
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <p className="text-gray-300 font-medium text-lg">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8 font-medium">Certifié et approuvé par</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="font-black text-emerald-600">B</span>
              </div>
              <span className="text-sm font-bold text-gray-400">BCEAO</span>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="font-black text-blue-600">ISO</span>
              </div>
              <span className="text-sm font-bold text-gray-400">ISO 27001</span>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <span className="font-black text-purple-600">R</span>
              </div>
              <span className="text-sm font-bold text-gray-400">RGPD</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}