'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Zap, Users, Globe, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Impact Social",
    description: "Nous mettons l'humain au centre de nos préoccupations et développons des solutions qui améliorent concrètement la vie des populations.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous agissons avec transparence et honnêteté dans toutes nos relations avec nos clients, partenaires et collaborateurs.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Nous repoussons constamment les limites technologiques pour offrir des solutions toujours plus performantes et adaptées.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous croyons en la force du travail d'équipe et cultivons un environnement de confiance et d'entraide mutuelle.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Globe,
    title: "Vision Globale",
    description: "Nous pensons global tout en agissant local, avec une compréhension profonde des spécificités de chaque marché.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans tout ce que nous faisons, de la qualité de nos produits au service client exceptionnel.",
    color: "from-indigo-500 to-blue-500"
  }
];

export function ValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            Nos{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Valeurs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ces valeurs fondamentales guident nos actions quotidiennes et définissent notre culture d'entreprise.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Notre Culture d'Entreprise
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Chez UltraCollecte, nous cultivons un environnement de travail stimulant où chaque membre de l'équipe peut s'épanouir, innover et contribuer à notre mission commune de démocratiser l'accès aux services financiers en Afrique.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                  <p className="text-gray-600">Satisfaction employés</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">4.8/5</div>
                  <p className="text-gray-600">Note Glassdoor</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">2 ans</div>
                  <p className="text-gray-600">Ancienneté moyenne</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              "Notre succès se mesure non seulement par nos performances financières, mais surtout par l'impact positif que nous avons sur les communautés que nous servons."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1"
                alt="Jean-Baptiste Kouassi"
                className="w-12 h-12 rounded-full border-2 border-primary-400"
              />
              <div className="text-left">
                <div className="font-semibold">Jean-Baptiste Kouassi</div>
                <div className="text-primary-300 text-sm">CEO & Co-fondateur</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
