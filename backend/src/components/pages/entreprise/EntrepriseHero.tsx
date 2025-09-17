'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

export function EntrepriseHero() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-700 mb-8"
          >
            <Award className="w-4 h-4" />
            <span>Leader de l'innovation fintech</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Nous Révolutionnons{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              la Microfinance
            </span>{' '}
            Digitale
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Depuis 2020, UltraCollecte accompagne les institutions de microfinance dans leur transformation digitale avec des solutions innovantes et sécurisées.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary-100">
              <Users className="w-8 h-8 text-primary-600 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <p className="text-sm text-gray-600">Institutions partenaires</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-secondary-100">
              <Target className="w-8 h-8 text-secondary-600 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500K+</div>
              <p className="text-sm text-gray-600">Clients gérés</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-accent-100">
              <Award className="w-8 h-8 text-accent-600 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <p className="text-sm text-gray-600">Disponibilité</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary-100">
              <Globe className="w-8 h-8 text-primary-600 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
              <p className="text-sm text-gray-600">Pays couverts</p>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Démocratiser l'accès aux services financiers en Afrique en fournissant aux institutions de microfinance les outils technologiques les plus avancés pour optimiser leurs opérations et mieux servir leurs clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
