'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Play, Video } from 'lucide-react'
import React from 'react'

const upcomingWebinars = [
  {
    title: "Optimiser vos taux de recouvrement avec l'IA",
    date: '25 Mars 2024',
    time: '14:00 - 15:30',
    speaker: 'Dr. Marie Diallo, CTO UltraCollecte',
    attendees: 156,
    description:
      "Découvrez comment l'intelligence artificielle peut transformer vos opérations de collecte.",
  },
  {
    title: 'Sécurité des données : enjeux et solutions',
    date: '2 Avril 2024',
    time: '10:00 - 11:30',
    speaker: 'Jean Kouassi, Expert Sécurité',
    attendees: 89,
    description: 'Meilleures pratiques pour protéger les données sensibles de vos clients.',
  },
]

const pastWebinars = [
  {
    title: 'Introduction à la microfinance digitale',
    date: '15 Février 2024',
    duration: '90 min',
    views: '2.3k',
    description: 'Les fondamentaux de la transformation digitale dans la microfinance.',
  },
  {
    title: 'Gestion des risques en microfinance',
    date: '8 Février 2024',
    duration: '75 min',
    views: '1.8k',
    description: 'Stratégies pour identifier et mitiger les risques opérationnels.',
  },
]

export const WebinarsSection = () => {
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
              Webinaires
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Participez à nos formations en ligne gratuites et développez votre expertise en
            microfinance digitale.
          </p>
        </motion.div>

        {/* Upcoming Webinars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Webinaires à venir</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <Video className="w-8 h-8 text-primary-600" />
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                    À venir
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>

                <p className="text-gray-600 mb-6">{webinar.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{webinar.attendees} inscrits</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6">
                  Animé par <strong>{webinar.speaker}</strong>
                </p>

                <button className="w-full btn btn-primary">S'inscrire gratuitement</button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Past Webinars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Replays disponibles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastWebinars.map((webinar, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <Play className="w-8 h-8 text-secondary-600" />
                  <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">
                    Replay
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{webinar.title}</h3>

                <p className="text-gray-600 mb-6">{webinar.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>{webinar.date}</span>
                  <span>{webinar.duration}</span>
                  <span>{webinar.views} vues</span>
                </div>

                <button className="w-full btn btn-ghost">Regarder le replay</button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
