'use client'

import { ContactForm } from '@/components/forms/ContactForm'
import { Modal } from '@/components/ui/modal'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Star, Sparkles, Zap, Crown, Rocket } from 'lucide-react'
import { useState } from 'react'

const annualDiscount = Number(process.env.NEXT_PUBLIC_ANNUAL_PACKAGE_DISCOUNT) || 10

const packages = [
  {
    name: 'Starter',
    price: 50000,
    currency: 'XAF',
    period: '/mois',
    description: 'Pour les petites IMF qui démarrent',
    clientsCount: '1000',
    agenciesCount: '1',
    agentsCount: '5',
    smsCount: '250',
    icon: Rocket,
    features: [
      "Jusqu'à 1000 clients",
      '1 agence',
      '5 agents de collecte',
      '2 administrateurs',
      '2 superviseurs',
      '2 caissiers',
      '250 SMS par mois',
      'Rapports personnalisés',
      'Application mobile',
      'Synchronisation temps réel',
      'Signature électronique',
      'Géolocalisation GPS',
      'Gestion des commissions',
      'Impression de reçus physiques',
      'Mode hors ligne complet',
      'Support et assistance standard',
      'Contrôle / limitation des collectes',
      'Retrait d'argent depuis collecteur',
      'Gestion des collecteurs',
      'Tableaux de bord personnalisés',
    ],
    popular: false,
    cta: 'Commencer gratuitement',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'from-emerald-50 to-teal-50'
  },
  {
    name: 'Professional',
    price: 100000,
    currency: 'XAF',
    period: '/mois',
    description: 'Idéal pour les IMF en croissance',
    clientsCount: '2500',
    agentsCount: '20',
    agenciesCount: '4',
    smsCount: '1000',
    icon: Zap,
    features: [
      "Jusqu'à 2500 clients",
      '4 agences',
      '20 agents de collecte',
      '5 administrateurs',
      '10 superviseurs',
      '10 caissiers',
      '1000 SMS par mois',
      'Tout les avantages du Starter',
    ],
    popular: true,
    cta: 'Essai gratuit 14 jours',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50'
  },
  {
    name: 'Enterprise',
    price: 200000,
    currency: 'XAF',
    period: '/mois',
    description: 'Pour les grandes institutions',
    clientsCount: '10000',
    agentsCount: '100',
    agenciesCount: '10',
    smsCount: '10000',
    icon: Crown,
    features: [
      "Jusqu'à 10000 clients",
      '10 agences',
      '100 agents de collecte',
      '12 administrateurs',
      '22 superviseurs',
      '25 caissiers',
      '10000 SMS par mois',
      'Tout les avantages du Professional',
      'Formation équipe',
      'Audit de sécurité',
      'SLA garanti',
    ],
    popular: false,
    cta: 'Contactez-nous',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    name: 'Premium',
    description: 'Contactez-nous pour des abonnements et des offres personnalisés selon vos besoins',
    features: [],
    cta: 'Contactez-nous',
    popular: false,
    icon: Star,
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50'
  },
]

export function PricingSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
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
              <span className="font-semibold text-gray-700">Plans Tarifaires</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Choisissez votre{' '}
              <span className="gradient-text">
                Plan Tarifaire
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Des solutions flexibles adaptées à la taille de votre institution et à vos besoins spécifiques.
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center mt-12 space-x-6">
              <span className={`text-lg font-semibold transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Mensuel
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isAnnual}
                  onChange={() => setIsAnnual(!isAnnual)}
                  className="sr-only"
                />
                <div
                  className={`w-16 h-8 rounded-full shadow-inner cursor-pointer transition-all duration-300 ${
                    isAnnual ? 'bg-gradient-to-r from-emerald-500 to-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setIsAnnual(!isAnnual)}
                >
                  <div
                    className={`w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-300 ${
                      isAnnual ? 'translate-x-8' : 'translate-x-0.5'
                    } translate-y-0.5`}
                  />
                </div>
              </div>
              <span className={`text-lg font-semibold transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Annuel{' '}
                <span className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold ml-2">
                  <Sparkles className="w-3 h-3 mr-1" />
                  -{annualDiscount}%
                </span>
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                      <Star className="w-4 h-4 fill-white" />
                      <span>Le plus populaire</span>
                    </div>
                  </div>
                )}

                <div
                  className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-500 h-full flex flex-col overflow-hidden ${
                    pkg.popular 
                      ? 'border-emerald-300 shadow-2xl scale-105' 
                      : 'border-gray-200 hover:border-emerald-200 hover:shadow-2xl group-hover:scale-105'
                  } ${hoveredIndex === index ? 'shadow-2xl' : ''}`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgColor || 'from-gray-50 to-gray-100'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 p-8 flex-1">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color || 'from-gray-500 to-gray-600'} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-black text-gray-900 mb-3">{pkg.name}</h3>
                      <p className="text-gray-600 mb-6 font-medium">{pkg.description}</p>
                      
                      {/* Price */}
                      {pkg.price && (
                        <div className="flex items-baseline justify-center mb-6">
                          <span className="text-gray-500 text-lg font-semibold">{pkg.currency}</span>
                          <span className="text-4xl md:text-5xl font-black text-gray-900 mx-2">
                            {isAnnual
                              ? calculateAnnualPrice(pkg.price ?? 0, Number(annualDiscount))
                              : pkg.price?.toLocaleString()}
                          </span>
                          <span className="text-gray-500 text-lg font-semibold">
                            {isAnnual ? '/an' : pkg.period}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Key Stats */}
                    {pkg.clientsCount && pkg.agenciesCount && pkg.agentsCount && pkg.smsCount && (
                      <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="text-center">
                          <div className="text-2xl font-black text-emerald-600">
                            {pkg.clientsCount}
                          </div>
                          <div className="text-xs text-gray-500 font-semibold">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-blue-600">
                            {pkg.agenciesCount}
                          </div>
                          <div className="text-xs text-gray-500 font-semibold">Agences</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-purple-600">{pkg.agentsCount}</div>
                          <div className="text-xs text-gray-500 font-semibold">Agents</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-orange-600">{pkg.smsCount}</div>
                          <div className="text-xs text-gray-500 font-semibold">SMS/mois</div>
                        </div>
                      </div>
                    )}

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="p-8 pt-0">
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 group relative overflow-hidden ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:shadow-2xl hover:scale-105'
                          : 'bg-gray-900 text-white hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-600 hover:scale-105'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {pkg.popular && <Sparkles className="w-5 h-5 mr-2" />}
                        {pkg.cta}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                      {!pkg.popular && (
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </button>
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  Besoin d'une solution personnalisée ?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
                  Nous proposons des tarifs sur mesure pour les grandes institutions avec des besoins spécifiques.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    Calculateur de prix
                  </button>
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="flex items-center">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Parler à un expert
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-8 font-medium">✓ Essai gratuit 14 jours • ✓ Sans engagement • ✓ Support inclus</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <span className="font-black text-emerald-600">SSL</span>
                </div>
                <span className="text-sm font-bold text-gray-400">Sécurisé SSL</span>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <span className="font-black text-blue-600">ISO</span>
                </div>
                <span className="text-sm font-bold text-gray-400">ISO 27001</span>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <span className="font-black text-purple-600">RGPD</span>
                </div>
                <span className="text-sm font-bold text-gray-400">RGPD Conforme</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Choisir votre plan"
      >
        <ContactForm
          onClose={() => setIsContactModalOpen(false)}
          title="Choisir votre plan tarifaire"
          subtitle="Contactez-nous pour discuter du plan qui convient le mieux à votre institution"
        />
      </Modal>
    </>
  )
}

function calculateAnnualPrice(price: number, discountPercentage: number) {
  return Math.round(price * 12 * (1 - discountPercentage / 100)).toLocaleString()
}