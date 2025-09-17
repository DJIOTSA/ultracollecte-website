'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

const milestones = [
  {
    year: "2020",
    title: "Fondation de UltraCollecte",
    description: "Création de l'entreprise avec une vision claire : révolutionner la microfinance digitale en Afrique."
  },
  {
    year: "2021",
    title: "Premiers Clients",
    description: "Lancement de la première version avec 10 institutions partenaires au Cameroun et au Sénégal."
  },
  {
    year: "2022",
    title: "Expansion Régionale",
    description: "Extension à 8 pays africains et développement des fonctionnalités avancées d'analytics."
  },
  {
    year: "2023",
    title: "Certification ISO",
    description: "Obtention de la certification ISO 27001 et lancement des APIs pour développeurs."
  },
  {
    year: "2024",
    title: "Intelligence Artificielle",
    description: "Intégration de l'IA pour l'analyse prédictive et l'optimisation des tournées de collecte."
  }
];

const values = [
  {
    icon: Users,
    title: "Impact Social",
    description: "Nous croyons que la technologie doit servir à améliorer l'accès aux services financiers pour tous."
  },
  {
    icon: TrendingUp,
    title: "Innovation Continue",
    description: "Nous investissons constamment dans la R&D pour rester à la pointe de la technologie fintech."
  },
  {
    icon: MapPin,
    title: "Expertise Locale",
    description: "Notre équipe comprend les spécificités du marché africain et adapte nos solutions en conséquence."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
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
            Notre{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Histoire
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment UltraCollecte est devenu le leader des solutions de collecte journalière pour les institutions de microfinance.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-20 bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="text-2xl font-bold text-primary-600">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Nos Valeurs Fondamentales
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Ces valeurs guident chacune de nos décisions et nous aident à rester fidèles à notre mission.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
