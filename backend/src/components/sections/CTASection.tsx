'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Download, Calendar, MessageCircle, Sparkles, Star, Zap, Shield } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { DemoForm } from '@/components/forms/DemoForm';
import { ContactForm } from '@/components/forms/ContactForm';

export function CTASection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20"
              >
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold text-white">Commencez Maintenant</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                Prêt à transformer vos{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  opérations de collecte
                </span>{' '}
                ?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 font-medium">
                Rejoignez plus de 100 institutions de microfinance qui utilisent déjà notre solution pour optimiser leurs performances et augmenter leur taux de recouvrement.
              </p>

              {/* Stats Row */}
              <div className="grid sm:grid-cols-3 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    14 jours
                  </div>
                  <p className="text-gray-400 font-semibold">Essai gratuit</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    0€
                  </div>
                  <p className="text-gray-400 font-semibold">Frais d'installation</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <p className="text-gray-400 font-semibold">Support disponible</p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Commencer l'essai gratuit
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => setIsDemoModalOpen(true)}
                className="flex items-center justify-center space-x-3 glass border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span>Planifier une démo</span>
              </button>
            </motion.div>

            {/* Additional Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-400 mb-16"
            >
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Télécharger la brochure</span>
              </button>
              <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Parler à un expert</span>
              </button>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 border-t border-gray-700"
            >
              <div className="flex justify-center items-center space-x-12">
                <div className="flex items-center space-x-3 text-emerald-400">
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold">Sécurisé SSL</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-400">
                  <Star className="w-6 h-6 fill-blue-400" />
                  <span className="font-semibold">ISO Certifié</span>
                </div>
                <div className="flex items-center space-x-3 text-purple-400">
                  <Zap className="w-6 h-6" />
                  <span className="font-semibold">RGPD Conforme</span>
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
  )
  );
}