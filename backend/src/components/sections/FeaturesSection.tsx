'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContactRound, Smartphone, PieChart, Shield, Clock, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { ContactForm } from '@/components/forms/ContactForm';

const features = [
  {
    icon: ContactRound,
    title: "Gestion Centralisée des Clients",
    description: "Suivez les portefeuilles, historiques et statuts de tous vos clients depuis une interface unique et intuitive.",
    benefits: ["Base de données centralisée", "Historique complet", "Statuts en temps réel"],
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50"
  },
  {
    icon: Smartphone,
    title: "Collecte Mobile Sécurisée",
    description: "Enregistrement des transactions avec géolocalisation et signatures électroniques pour une traçabilité complète.",
    benefits: ["Géolocalisation GPS", "Signatures numériques", "Mode hors-ligne"],
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    icon: PieChart,
    title: "Rapports Financiers Automatisés",
    description: "Générez automatiquement les soldes clients, rapports de collecte et règlements journaliers.",
    benefits: ["Rapports automatiques", "Exports multiples", "Tableaux de bord"],
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    icon: Shield,
    title: "Sécurité Bancaire",
    description: "Chiffrement AES-256, conformité RGPD et authentification multi-facteurs pour protéger vos données.",
    benefits: ["Chiffrement AES-256", "Conformité RGPD", "Authentification 2FA"],
    color: "from-red-500 to-orange-600",
    bgColor: "from-red-50 to-orange-50"
  },
  {
    icon: Clock,
    title: "Synchronisation Temps Réel",
    description: "Synchronisation instantanée des données entre tous les appareils et agents pour une coordination parfaite.",
    benefits: ["Sync instantanée", "Multi-appareils", "Coordination équipes"],
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-50 to-blue-50"
  },
  {
    icon: MapPin,
    title: "Géolocalisation Avancée",
    description: "Suivi GPS des agents, vérification des lieux de collecte et optimisation des tournées.",
    benefits: ["Tracking GPS", "Vérification lieux", "Optimisation routes"],
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50"
  }
];

export function FeaturesSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%2310b981" fill-opacity="0.03"%3E%3Cpolygon points="50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
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
              <span className="font-semibold text-gray-700">Fonctionnalités Avancées</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Tout ce dont vous avez{' '}
              <span className="gradient-text">
                besoin
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Découvrez tous les outils dont vous avez besoin pour transformer vos opérations de microfinance et améliorer vos performances.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-gray-200 transition-all duration-500 h-full overflow-hidden ${
                  hoveredIndex === index ? 'scale-105 shadow-2xl' : ''
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {feature.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                          className="flex items-center text-gray-700 font-medium"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-4"></div>
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 10
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-6 right-6"
                    >
                      <ArrowUpRight className="w-6 h-6 text-emerald-600" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="relative bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-3xl p-12 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  Prêt à transformer vos opérations ?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-medium">
                  Rejoignez plus de 100 institutions de microfinance qui font déjà confiance à notre solution.
                </p>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="relative overflow-hidden bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Demander une démo personnalisée
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Demander une démo"
      >
        <ContactForm 
          onClose={() => setIsContactModalOpen(false)}
          title="Demander une démo personnalisée"
          subtitle="Notre équipe vous présentera la solution adaptée à vos besoins"
        />
      </Modal>
    </>
  );
}