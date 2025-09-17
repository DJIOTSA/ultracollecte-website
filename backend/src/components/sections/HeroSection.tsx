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
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { DemoForm } from "@/components/forms/DemoForm";
import { ContactForm } from "@/components/forms/ContactForm";

export function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-200/40 to-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div
            className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2310b981" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
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
                className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 text-sm font-semibold text-emerald-700 border border-emerald-200/50"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <Shield className="w-4 h-4" />
                <span>Solution certifiée et sécurisée</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black text-gray-900 leading-tight"
              >
                Révolutionnez votre{" "}
                <span className="relative">
                  <span className="gradient-text">
                    Collecte Journalière
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                  ></motion.div>
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium"
              >
                Automatisez, optimisez et sécurisez vos opérations de microfinance avec la plateforme tout-en-un de nouvelle génération.
              </motion.p>

              {/* Key Features Pills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-emerald-200/50 rounded-full px-4 py-2 text-gray-700 hover:bg-emerald-50 transition-all duration-300">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold">Gestion centralisée</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 text-gray-700 hover:bg-blue-50 transition-all duration-300">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Temps réel</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-200/50 rounded-full px-4 py-2 text-gray-700 hover:bg-purple-50 transition-all duration-300">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold">100% sécurisé</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Démarrer gratuitement
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                  <span>Voir la démo</span>
                </button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-8"
              >
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.9/5 (100+ avis)</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Ils nous font confiance
                </p>
                <div className="flex items-center space-x-8 opacity-60">
                  <span className="font-bold text-gray-400 text-lg">
                    CreditPlus
                  </span>
                  <span className="font-bold text-gray-400 text-lg">
                    MicroFinance+
                  </span>
                  <span className="font-bold text-gray-400 text-lg">
                    EasyCredit
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual - Enhanced Collection Interface */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                {/* Main Phone Mockup */}
                <div className="relative mx-auto w-80 h-[520px] lg:w-96 lg:h-[600px]">
                  {/* Phone Frame */}
                  <motion.div 
                    animate={{ 
                      rotateY: [0, 5, 0],
                      rotateX: [0, -2, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[3rem] shadow-2xl"
                  ></motion.div>
                  
                  {/* Screen */}
                  <div className="absolute inset-3 bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                    {/* Phone Screen Content */}
                    <div className="p-6 h-full bg-gradient-to-br from-gray-50 to-white">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                        <div className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                          UltraCollecte
                        </div>
                      </div>

                      {/* Header with Stats */}
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-4 mb-6 text-white">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-bold">Collectes du jour</h3>
                            <p className="text-emerald-100 text-sm">8 transactions</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">45,600</div>
                            <div className="text-emerald-100 text-sm">XAF collectés</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>+12% vs hier</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>5 agents actifs</span>
                          </div>
                        </div>
                      </div>

                      {/* Collection List */}
                      <div className="space-y-3">
                        {/* Collection Item 1 */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1, duration: 0.5 }}
                          className="bg-white rounded-2xl p-4 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="font-bold text-gray-900">Siméon K.</p>
                                <div className="flex items-center text-xs text-gray-500">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  16/06 10:54
                                  <div className="w-1 h-1 bg-emerald-500 rounded-full mx-2"></div>
                                  <span className="text-emerald-600 font-semibold">Confirmé</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-semibold">
                                  XAF
                                </span>
                                <span className="font-bold text-gray-900 text-lg">
                                  10,000
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Collection Item 2 */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2, duration: 0.5 }}
                          className="bg-white rounded-2xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="font-bold text-gray-900">Blaise M.</p>
                                <div className="flex items-center text-xs text-gray-500">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  16/06 10:54
                                  <div className="w-1 h-1 bg-blue-500 rounded-full mx-2"></div>
                                  <span className="text-blue-600 font-semibold">En cours</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                                  XAF
                                </span>
                                <span className="font-bold text-gray-900 text-lg">
                                  13,000
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Collection Item 3 */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4, duration: 0.5 }}
                          className="bg-white rounded-2xl p-4 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                                <CreditCard className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="font-bold text-gray-900">Jean Olivier</p>
                                <div className="flex items-center text-xs text-gray-500">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  16/06 10:52
                                  <div className="w-1 h-1 bg-purple-500 rounded-full mx-2"></div>
                                  <span className="text-purple-600 font-semibold">Confirmé</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">
                                  XAF
                                </span>
                                <span className="font-bold text-gray-900 text-lg">
                                  600
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [-15, 15, -15],
                    rotate: [-3, 3, -3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-emerald-200/50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Collecte Active</p>
                      <p className="text-xs text-gray-500">5 agents en ligne</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [15, -15, 15],
                    rotate: [3, -3, 3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -right-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-blue-200/50"
                >
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                      +40%
                    </div>
                    <p className="text-xs text-gray-500 font-semibold">Taux de recouvrement</p>
                  </div>
                </motion.div>

                {/* Success Indicator */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 -right-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 text-white shadow-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">✓</div>
                    <p className="text-xs">Sécurisé</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
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