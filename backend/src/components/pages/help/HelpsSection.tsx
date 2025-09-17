'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Search, Book, Video, MessageCircle, Download } from 'lucide-react'

const helpCategories = [
  {
    title: 'Premiers Pas',
    icon: Book,
    articles: [
      'Comment créer votre compte',
      'Configuration initiale',
      'Ajouter vos premiers clients',
      'Former votre équipe',
    ],
  },
  {
    title: 'Guides Utilisateur',
    icon: Video,
    articles: [
      "Utiliser l'application mobile",
      'Générer des rapports',
      'Gérer les collectes',
      'Synchroniser les données',
    ],
  },
  {
    title: 'Intégrations',
    icon: Download,
    articles: [
      'Connecter votre système bancaire',
      'Configurer les APIs',
      'Importer vos données',
      'Exporter vers Excel',
    ],
  },
]

export const HelpsSection = () => {
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
            Centre{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              d'Aide
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Trouvez rapidement des réponses à vos questions et apprenez à utiliser UltraCollecte
            efficacement.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher dans l'aide..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
            />
          </div>
        </motion.div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {helpCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.articles.map((article, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-primary-600 rounded-2xl p-8 text-white"
        >
          <MessageCircle className="w-16 h-16 mx-auto mb-6 text-primary-200" />
          <h3 className="text-2xl font-bold mb-4">Besoin d'aide personnalisée ?</h3>
          <p className="text-primary-100 mb-6">
            Notre équipe support est disponible 24/7 pour vous accompagner.
          </p>
          <button className="btn btn-accent btn-lg">Contacter le Support</button>
        </motion.div>
      </div>
    </section>
  )
}
