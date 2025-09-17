'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Download } from 'lucide-react';

const pressReleases = [
  {
    date: "15 Mars 2024",
    title: "UltraCollecte lève 5M€ pour accélérer son expansion en Afrique de l'Ouest",
    excerpt: "La startup fintech annonce une levée de fonds Série A pour développer ses fonctionnalités d'IA et étendre sa présence sur 10 nouveaux marchés.",
    category: "Financement",
    link: "#"
  },
  {
    date: "28 Février 2024",
    title: "Partenariat stratégique avec la Banque Centrale du Sénégal",
    excerpt: "UltraCollecte devient le premier partenaire technologique officiel pour la digitalisation des IMF sénégalaises.",
    category: "Partenariat",
    link: "#"
  },
  {
    date: "10 Janvier 2024",
    title: "UltraCollecte remporte le prix de l'Innovation Fintech 2024",
    excerpt: "Notre solution de collecte journalière a été récompensée lors du sommet Africa Fintech à Lagos.",
    category: "Récompense",
    link: "#"
  },
  {
    date: "5 Décembre 2023",
    title: "Lancement de l'API publique et du programme développeur",
    excerpt: "Les développeurs peuvent désormais intégrer les fonctionnalités de UltraCollecte dans leurs applications.",
    category: "Produit",
    link: "#"
  }
];

const mediaKit = [
  {
    name: "Logo Pack",
    description: "Logos haute résolution en différents formats",
    size: "2.5 MB",
    format: "ZIP"
  },
  {
    name: "Photos Équipe",
    description: "Photos officielles de l'équipe dirigeante",
    size: "15 MB",
    format: "ZIP"
  },
  {
    name: "Fact Sheet",
    description: "Fiche d'information entreprise",
    size: "500 KB",
    format: "PDF"
  },
  {
    name: "Présentation Entreprise",
    description: "Deck de présentation officiel",
    size: "8 MB",
    format: "PDF"
  }
];

const awards = [
  {
    year: "2024",
    title: "Prix Innovation Fintech Africa",
    organization: "Africa Fintech Summit"
  },
  {
    year: "2023",
    title: "Startup de l'Année - Fintech",
    organization: "Tech Awards Dakar"
  },
  {
    year: "2023",
    title: "Best Digital Solution for Financial Inclusion",
    organization: "BCEAO Innovation Awards"
  },
  {
    year: "2022",
    title: "Rising Star Award",
    organization: "West Africa Tech Week"
  }
];

export function PressSection() {
  return (
    <section id="press" className="py-16 md:py-24 bg-white">
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
            Espace{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Presse
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Retrouvez nos dernières actualités, communiqués de presse et ressources média.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Press Releases */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Communiqués de Presse</h3>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <motion.article
                    key={release.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary-600" />
                        <span className="text-sm text-gray-500">{release.date}</span>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                          {release.category}
                        </span>
                      </div>
                      <a
                        href={release.link}
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {release.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{release.excerpt}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Media Kit */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kit Média</h3>
              <div className="space-y-4">
                {mediaKit.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow group">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <span className="text-xs text-gray-500">{item.size} • {item.format}</span>
                    </div>
                    <button className="text-gray-400 hover:text-primary-600 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Récompenses</h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <div className="text-sm font-bold text-primary-600">{award.year}</div>
                    <h4 className="font-semibold text-gray-900">{award.title}</h4>
                    <p className="text-sm text-gray-600">{award.organization}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Presse */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-900 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Contact Presse</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold">Sarah Mensah</div>
                  <div className="text-gray-300 text-sm">Directrice Communication</div>
                </div>
                <div className="text-sm text-gray-300">
                  <div>📧 presse@collectpro.com</div>
                  <div>📱 +33 1 23 45 67 89</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
