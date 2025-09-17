'use client';

import { motion } from 'framer-motion';
import { Scale, Shield, FileText, Eye } from 'lucide-react';

export function LegalHero() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700 mb-8"
          >
            <Scale className="w-4 h-4" />
            <span>Conformité et transparence</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Mentions{' '}
            <span className="bg-gradient-to-r from-blue-600 to-gray-600 bg-clip-text text-transparent">
              Légales
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Consultez nos conditions d'utilisation, politique de confidentialité et informations légales. Nous nous engageons à la transparence et au respect de vos droits.
          </motion.p>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <a href="#privacy" className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 group">
              <Shield className="w-8 h-8 text-blue-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">Confidentialité</h3>
              <p className="text-sm text-gray-600">Protection des données</p>
            </a>
            <a href="#terms" className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <FileText className="w-8 h-8 text-gray-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">CGU</h3>
              <p className="text-sm text-gray-600">Conditions générales</p>
            </a>
            <a href="#gdpr" className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300 group">
              <Eye className="w-8 h-8 text-green-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">RGPD</h3>
              <p className="text-sm text-gray-600">Conformité européenne</p>
            </a>
            <a href="#cookies" className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300 group">
              <Scale className="w-8 h-8 text-orange-600 mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-2">Cookies</h3>
              <p className="text-sm text-gray-600">Gestion des cookies</p>
            </a>
          </motion.div>

          {/* Last Update */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500">
              Dernière mise à jour : 15 mars 2024
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}