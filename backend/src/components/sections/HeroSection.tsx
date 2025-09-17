"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Play,
  Shield,
  Zap,
  Users,
  Calendar,
  CreditCard,
} from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { DemoForm } from "@/components/forms/DemoForm";
import { ContactForm } from "@/components/forms/ContactForm";

export function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 text-sm font-medium text-primary-700"
              >
                <Shield className="w-4 h-4" />
                <span>Solution certifiée et sécurisée</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Solution Digitale de{" "}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Collecte Journalière
                </span>{" "}
                pour IMF
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Automatisez le suivi des remboursements, optimisez vos
                opérations et augmentez votre taux de recouvrement avec notre
                plateforme tout-en-un.
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2 text-gray-700">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="font-medium">Gestion centralisée</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Zap className="w-5 h-5 text-accent-600" />
                  <span className="font-medium">Temps réel</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Shield className="w-5 h-5 text-secondary-600" />
                  <span className="font-medium">100% sécurisé</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-primary btn-lg group hover:scale-105 transition-all duration-200"
                >
                  Démarrer gratuitement
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="btn btn-ghost btn-lg group"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Voir la démo
                </button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-8 border-t border-gray-200"
              >
                <p className="text-sm text-gray-500 mb-4">
                  Ils nous font confiance
                </p>
                <div className="flex items-center space-x-8 opacity-60">
                  <span className="font-semibold text-gray-400">
                    CreditPlus
                  </span>
                  <span className="font-semibold text-gray-400">
                    MicroFinance+
                  </span>
                  <span className="font-semibold text-gray-400">
                    EasyCredit
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual - Collection Interface */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Main Phone Mockup */}
                <div className="relative mx-auto w-80 h-[520px] lg:w-96 lg:h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500"></div>
                  <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                    {/* Phone Screen Content - Collection List */}
                    <div className="p-6 h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-sm font-medium text-gray-600">
                          UltraCollecte
                        </div>
                      </div>

                      {/* Collection Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            Dernières collectes(8)
                          </h3>
                        </div>
                        <div className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                          Ce mois
                        </div>
                      </div>

                      {/* Collection List - Fixed height without scroll */}
                      <div className="space-y-3">
                        {/* Collection Item 1 */}
                        <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-primary-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                Siméon
                              </p>
                              <p className="text-xs text-gray-500 flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                16/06 10:54
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                XAF
                              </span>
                              <span className="font-bold text-gray-900">
                                10 000 FCFA
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Collection Item 2 */}
                        <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-secondary-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                Blaise
                              </p>
                              <p className="text-xs text-gray-500 flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                16/06 10:54
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                XAF
                              </span>
                              <span className="font-bold text-gray-900">
                                13 000 FCFA
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Collection Item 3 */}
                        <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-accent-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                Jean Olivier{" "}
                              </p>
                              <p className="text-xs text-gray-500 flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                16/06 10:52
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                XAF
                              </span>
                              <span className="font-bold text-gray-900">
                                600 FCFA
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Collection Item 4 */}
                        <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                              <CreditCard className="w-5 h-5 text-primary-600" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">
                                Siméon
                              </p>
                              <p className="text-xs text-gray-500 flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                16/06 10:21
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                                XAF
                              </span>
                              <span className="font-bold text-gray-900">
                                10 000 FCFA
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-lg p-4 border border-primary-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">
                        Collecte
                      </p>
                      <p className="text-xs text-gray-500">En cours</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -right-8 bg-white rounded-2xl shadow-lg p-4 border border-accent-200"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-600">8</p>
                    <p className="text-xs text-gray-500">Collectes</p>
                  </div>
                </motion.div>
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
        title="Contactez notre équipe"
      >
        <ContactForm
          onClose={() => setIsContactModalOpen(false)}
          title="Commencer votre essai gratuit"
          subtitle="Remplissez ce formulaire et notre équipe vous contactera pour configurer votre compte"
        />
      </Modal>
    </>
  );
}
