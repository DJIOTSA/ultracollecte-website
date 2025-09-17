'use client'
import React from 'react'
import { Handshake, Globe, Award, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const partnerCategories = [
  {
    title: 'Partenaires Technologiques',
    icon: Globe,
    partners: [
      { name: 'Microsoft Azure', description: 'Infrastructure cloud' },
      { name: 'AWS', description: 'Services cloud avancés' },
      { name: 'Twilio', description: 'Communications API' },
      { name: 'Stripe', description: 'Paiements en ligne' },
    ],
  },
  {
    title: 'Partenaires Financiers',
    icon: Award,
    partners: [
      { name: 'BCEAO', description: 'Banque Centrale' },
      { name: 'AFD', description: 'Agence Française de Développement' },
      { name: 'IFC', description: 'International Finance Corporation' },
      { name: 'CGAP', description: 'Consultative Group to Assist the Poor' },
    ],
  },
  {
    title: 'Partenaires Institutionnels',
    icon: Handshake,
    partners: [
      { name: 'AMIFA', description: "Association des IMF d'Afrique" },
      { name: 'MIX Market', description: "Plateforme d'information microfinance" },
      { name: 'CERISE', description: "Comité d'Échanges, de Réflexion et d'Information" },
      { name: 'SPTF', description: 'Social Performance Task Force' },
    ],
  },
]
export const ParnersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nos{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Partenaires
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous collaborons avec les leaders de l'industrie pour offrir la meilleure solution de
            microfinance digitale.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.partners.map((partner, idx) => (
                  <div key={idx} className="border-l-4 border-primary-200 pl-4">
                    <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                    <p className="text-sm text-gray-600">{partner.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
