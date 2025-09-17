'use client'
import React from 'react'

import { motion } from 'framer-motion'
import { BookOpen, Download, Clock, Star } from 'lucide-react'

const guides = [
  {
    title: 'Guide de démarrage rapide',
    description: "Tout ce qu'il faut savoir pour commencer avec UltraCollecte en 30 minutes.",
    duration: '30 min',
    difficulty: 'Débutant',
    downloads: '2.5k',
    category: 'Démarrage',
  },
  {
    title: 'Optimisation des tournées de collecte',
    description: "Stratégies avancées pour maximiser l'efficacité de vos agents sur le terrain.",
    duration: '45 min',
    difficulty: 'Intermédiaire',
    downloads: '1.8k',
    category: 'Optimisation',
  },
  {
    title: 'Analyse des données et reporting',
    description: 'Exploitez pleinement vos données pour prendre de meilleures décisions.',
    duration: '60 min',
    difficulty: 'Avancé',
    downloads: '1.2k',
    category: 'Analytics',
  },
  {
    title: 'Sécurité et conformité',
    description: 'Meilleures pratiques pour assurer la sécurité de vos données clients.',
    duration: '40 min',
    difficulty: 'Intermédiaire',
    downloads: '950',
    category: 'Sécurité',
  },
  {
    title: 'Intégration avec vos systèmes',
    description: 'Guide technique pour connecter UltraCollecte à votre infrastructure existante.',
    duration: '90 min',
    difficulty: 'Avancé',
    downloads: '750',
    category: 'Technique',
  },
  {
    title: 'Formation des équipes',
    description: 'Méthodologie complète pour former efficacement vos agents de collecte.',
    duration: '120 min',
    difficulty: 'Débutant',
    downloads: '2.1k',
    category: 'Formation',
  },
]

export const GuidesSection = () => {
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
            Guides{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Pratiques
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez UltraCollecte avec nos guides détaillés et optimisez vos opérations de
            microfinance.
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="w-8 h-8 text-primary-600" />
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {guide.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {guide.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{guide.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{guide.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{guide.difficulty}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>{guide.downloads}</span>
                </div>
              </div>

              <button className="w-full btn btn-primary group/btn">
                Télécharger le guide
                <Download className="w-4 h-4 ml-2 group-hover/btn:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
