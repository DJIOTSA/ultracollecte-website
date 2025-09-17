'use client'

import { ContactForm } from '@/components/forms/ContactForm'
import { Modal } from '@/components/ui/modal'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Star } from 'lucide-react'
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
      'Retrait d’argent depuis collecteur',
      'Gestion des collecteurs',
      'Tableaux de bord personnalisés',
    ],
    popular: false,
    cta: 'Commencer gratuitement',
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
    features: [
      "Jusqu'à 2500 clients",
      '4 agences',
      '20 agents de collecte',
      '5 administrateurs',
      '10 superviseurs',
      '10 caissiers',
      '1000 SMS par mois',
      'Tout les avantages du Starter',
      // "API d'intégration",
    ],
    popular: true,
    cta: 'Essai gratuit 14 jours',
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
    features: [
      "Jusqu'à 10000 clients",
      '10 agences',
      '100 agents de collecte',
      '12 administrateurs',
      '22 superviseurs',
      '25 caissiers',
      '10000 SMS par mois',
      'Tout les avantages du Professional',
      // "API d'intégration",
      'Formation équipe',
      'Audit de sécurité',
      'SLA garanti',
    ],
    popular: false,
    cta: 'Contactez-nous',
  },
  {
    name: 'Premium',
    description:
      'Contactez-nous pour des abonnements et des offres personnalisés selon vos besoins ',
    features: [],
    cta: 'Contactez-nous',
    popular: true,
  },
]

export function PricingSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Choisissez votre{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Plan Tarifaire
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des solutions flexibles adaptées à la taille de votre institution et à vos besoins
              spécifiques.
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <span className="text-gray-600">Mensuel</span>
              <div className="relative">
                {/* hidden checkbox for accessibility */}
                <input
                  type="checkbox"
                  checked={isAnnual}
                  onChange={() => setIsAnnual(!isAnnual)}
                  className="sr-only"
                />
                <div
                  className={`w-12 h-6  rounded-full shadow-inner cursor-pointer ${isAnnual ? 'bg-accent-600' : ' bg-gray-300'}`}
                  onClick={() => setIsAnnual(!isAnnual)}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300
              ${isAnnual ? 'translate-x-6' : 'translate-x-0.5'} translate-y-0.5`}
                  />
                </div>
              </div>
              <span className="text-gray-600">
                Annuel <span className="text-accent-600 font-medium">(-{annualDiscount}%)</span>
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
                className="relative group mb-5"
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-1 md:-top-5 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-white" />
                      <span>Populaire</span>
                    </div>
                  </div>
                )}

                <div
                  className={`bg-white rounded-3xl shadow-lg border-2 transition-all duration-300 h-full flex flex-col XAF{
                  pkg.popular 
                    ? 'border-accent-300 shadow-xl scale-105 lg:scale-110' 
                    : 'border-gray-100 hover:border-primary-200 hover:shadow-xl group-hover:scale-105'
                }`}
                >
                  <div className="px-4 pb-4 pt-14 flex-1">
                    {/* Header */}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 mb-6">{pkg.description}</p>
                      {/* Price */}
                      {pkg.price && (
                        <div className="flex items-baseline justify-center">
                          <span className="text-gray-500 text-lg">{pkg.currency}</span>
                          <span className="text-4xl font-bold text-gray-900 mx-1">
                            {isAnnual
                              ? calculateAnnualPrice(pkg.price ?? 0, Number(annualDiscount))
                              : pkg.price}
                          </span>
                          <span className="text-gray-500 text-lg">
                            {isAnnual ? '/ans' : pkg.period}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Key Stats */}
                    {pkg.clientsCount && pkg.agenciesCount && pkg.agentsCount && pkg.smsCount && (
                      <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gray-50 rounded-2xl">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">
                            {pkg.clientsCount}
                          </div>
                          <div className="text-xs text-gray-500">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-secondary-600">
                            {pkg.agenciesCount}
                          </div>
                          <div className="text-xs text-gray-500">Agences</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent-600">{pkg.smsCount}</div>
                          <div className="text-xs text-gray-500">SMS/mois</div>
                        </div>
                      </div>
                    )}
                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-accent-100 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-accent-600" />
                          </div>
                          <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="px-4 pt-0 pb-4">
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className={`w-full btn btn-lg group transition-all text-sm duration-300 XAF{
                        pkg.popular
                          ? 'btn-accent hover:scale-105 shadow-lg'
                          : 'btn-primary hover:scale-105'
                      }`}
                    >
                      {pkg.cta}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'une solution personnalisée ?
              </h3>
              <p className="text-gray-600 mb-6">
                Nous proposons des tarifs sur mesure pour les grandes institutions avec des besoins
                spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-outline btn-lg"
                >
                  Calculateur de prix
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-primary btn-lg"
                >
                  Parler à un expert
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
  return Math.round(price * 12 * (1 - discountPercentage / 100))
}
