'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Clock, Users, ArrowRight, Briefcase, Heart, Zap } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { ContactForm } from '@/components/forms/ContactForm';

const jobs = [
  {
    title: "Développeur Full-Stack Senior",
    department: "Technique",
    location: "Dakar, Sénégal",
    type: "CDI",
    experience: "5+ ans",
    description: "Rejoignez notre équipe technique pour développer les prochaines fonctionnalités de notre plateforme.",
    skills: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    title: "Product Manager",
    department: "Produit",
    location: "Abidjan, Côte d'Ivoire",
    type: "CDI",
    experience: "3+ ans",
    description: "Définissez la stratégie produit et travaillez étroitement avec nos équipes techniques et commerciales.",
    skills: ["Product Strategy", "Analytics", "UX/UI", "Agile"]
  },
  {
    title: "Ingénieur DevOps",
    department: "Infrastructure",
    location: "Remote",
    type: "CDI",
    experience: "4+ ans",
    description: "Optimisez notre infrastructure cloud et automatisez nos processus de déploiement.",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform"]
  },
  {
    title: "Business Developer",
    department: "Commercial",
    location: "Lagos, Nigeria",
    type: "CDI",
    experience: "2+ ans",
    description: "Développez notre présence sur le marché nigérian et identifiez de nouvelles opportunités.",
    skills: ["B2B Sales", "Market Analysis", "Relationship Building"]
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Casablanca, Maroc",
    type: "CDI",
    experience: "3+ ans",
    description: "Concevez des expériences utilisateur exceptionnelles pour nos applications mobiles et web.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
  },
  {
    title: "Data Scientist",
    department: "Data",
    location: "Tunis, Tunisie",
    type: "CDI",
    experience: "4+ ans",
    description: "Développez des modèles d'IA pour améliorer nos algorithmes de scoring et de prédiction.",
    skills: ["Python", "Machine Learning", "SQL", "Statistics"]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Équilibre Vie Pro/Perso",
    description: "Télétravail flexible, congés illimités et horaires adaptables"
  },
  {
    icon: Zap,
    title: "Développement Personnel",
    description: "Budget formation, conférences et certifications prises en charge"
  },
  {
    icon: Users,
    title: "Équipe Internationale",
    description: "Travaillez avec des talents de toute l'Afrique et d'ailleurs"
  },
  {
    icon: Briefcase,
    title: "Avantages Compétitifs",
    description: "Salaire attractif, stock-options et assurance santé premium"
  }
];

export function CareersSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="careers" className="py-16 md:py-24 bg-gray-50">
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
              Rejoignez{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                l'Aventure
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Construisez l'avenir de la fintech africaine avec une équipe passionnée et talentueuse.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Job Listings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Postes Ouverts</h3>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {job.title}
                        </h4>
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="btn btn-primary group/btn"
                      >
                        Postuler
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Spontaneous Application */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Vous ne trouvez pas le poste idéal ?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Envoyez-nous une candidature spontanée ! Nous sommes toujours à la recherche de talents exceptionnels.
              </p>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-accent btn-lg hover:scale-105 transition-transform"
              >
                Candidature spontanée
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Candidature"
      >
        <ContactForm 
          onClose={() => setIsContactModalOpen(false)}
          title="Postuler chez UltraCollecte"
          subtitle="Parlez-nous de vous et du poste qui vous intéresse"
        />
      </Modal>
    </>
  );
}
