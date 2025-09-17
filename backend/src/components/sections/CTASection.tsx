'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Download, Calendar, MessageCircle } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { DemoForm } from '@/components/forms/DemoForm';
import { ContactForm } from '@/components/forms/ContactForm';

export function CTASection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-400/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Prêt à transformer vos{' '}
                <span className="text-accent-300">
                  opérations de collecte
                </span>{' '}
                ?
              </h2>
              <p className="text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto mb-8">
                Rejoignez plus de 100 institutions de microfinance qui utilisent déjà notre solution pour optimiser leurs performances et augmenter leur taux de recouvrement.
              </p>

              {/* Stats Row */}
              <div className="grid sm:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-2">14 jours</div>
                  <p className="text-primary-200 text-sm">Essai gratuit</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-2">0€</div>
                  <p className="text-primary-200 text-sm">Frais d'installation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-300 mb-2">24/7</div>
                  <p className="text-primary-200 text-sm">Support disponible</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-accent btn-lg group hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Commencer l'essai gratuit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="btn btn-ghost text-white border-white/30 hover:bg-white/10 btn-lg group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Planifier une démo
              </button>
            </motion.div>

            {/* Additional Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-200"
            >
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center space-x-2 hover:text-white transition-colors group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Télécharger la brochure</span>
              </button>
              <div className="hidden sm:block w-px h-6 bg-primary-400"></div>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center space-x-2 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Parler à un expert</span>
              </button>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 pt-8 border-t border-primary-500/30"
            >
              <p className="text-primary-200 text-sm mb-6">
                ✓ Sans engagement • ✓ Configuration gratuite • ✓ Support inclus
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-center">
                  <div className="w-12 h-8 bg-primary-400/30 rounded mb-2 mx-auto"></div>
                  <span className="text-xs text-primary-300">Sécurisé SSL</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-8 bg-primary-400/30 rounded mb-2 mx-auto"></div>
                  <span className="text-xs text-primary-300">RGPD Conforme</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-8 bg-primary-400/30 rounded mb-2 mx-auto"></div>
                  <span className="text-xs text-primary-300">ISO Certifié</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <Modal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Planifier une démo personnalisée"
      >
        <DemoForm onClose={() => setIsDemoModalOpen(false)} />
      </Modal>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Commencer votre essai gratuit"
      >
        <ContactForm 
          onClose={() => setIsContactModalOpen(false)}
          title="Commencer votre essai gratuit"
          subtitle="Remplissez ce formulaire pour démarrer votre période d'essai de 14 jours"
        />
      </Modal>
    </>
  );
}