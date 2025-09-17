'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Play, Shield, Zap, Users, Smartphone } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { DemoForm } from '@/components/forms/DemoForm';
import { ContactForm } from '@/components/forms/ContactForm';

export function ProduitHero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
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
              <Shield className="w-4 h-4" />
              <span>Solution complète et sécurisée</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Une Plateforme{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Tout-en-Un
              </span>{' '}
              pour la Microfinance
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Découvrez toutes les fonctionnalités avancées qui font de UltraCollecte la solution de référence pour optimiser vos opérations de collecte journalière.
            </motion.p>

            {/* Key Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary-100">
                <Users className="w-8 h-8 text-primary-600 mb-3 mx-auto" />
                <h3 className="font-semibold text-gray-900 mb-2">Gestion Centralisée</h3>
                <p className="text-sm text-gray-600">Tous vos clients en un seul endroit</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-secondary-100">
                <Smartphone className="w-8 h-8 text-secondary-600 mb-3 mx-auto" />
                <h3 className="font-semibold text-gray-900 mb-2">Collecte Mobile</h3>
                <p className="text-sm text-gray-600">Applications natives iOS & Android</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-accent-100">
                <Zap className="w-8 h-8 text-accent-600 mb-3 mx-auto" />
                <h3 className="font-semibold text-gray-900 mb-2">Temps Réel</h3>
                <p className="text-sm text-gray-600">Synchronisation instantanée</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary-100">
                <Shield className="w-8 h-8 text-primary-600 mb-3 mx-auto" />
                <h3 className="font-semibold text-gray-900 mb-2">Sécurité Bancaire</h3>
                <p className="text-sm text-gray-600">Chiffrement AES-256</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-primary btn-lg group hover:scale-105 transition-all duration-200"
              >
                Essayer gratuitement
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="btn btn-ghost btn-lg group"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir la démo produit
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Planifier une démo produit"
      >
        <DemoForm onClose={() => setIsDemoModalOpen(false)} />
      </Modal>

      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Essayer gratuitement"
      >
        <ContactForm 
          onClose={() => setIsContactModalOpen(false)}
          title="Commencer votre essai gratuit"
          subtitle="Découvrez toutes les fonctionnalités pendant 14 jours"
        />
      </Modal>
    </>
  );
}
