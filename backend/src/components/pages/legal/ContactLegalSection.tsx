'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { ContactForm } from '@/components/forms/ContactForm';

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Pour toute question légale",
    contact: "legal@collectpro.com",
    response: "Réponse sous 48h"
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "Support juridique",
    contact: "+33 1 23 45 67 89",
    response: "Lun-Ven 9h-18h"
  },
  {
    icon: MapPin,
    title: "Courrier",
    description: "Service juridique",
    contact: "123 Avenue des Champs-Élysées, 75008 Paris",
    response: "Traitement sous 15 jours"
  },
  {
    icon: MessageSquare,
    title: "Formulaire",
    description: "Contact en ligne",
    contact: "Formulaire sécurisé",
    response: "Réponse sous 24h"
  }
];

const legalTeam = [
  {
    name: "Marie Dubois",
    position: "Directrice Juridique",
    speciality: "Droit des données personnelles",
    email: "marie.dubois@collectpro.com"
  },
  {
    name: "Pierre Martin",
    position: "Délégué à la Protection des Données",
    speciality: "RGPD et conformité",
    email: "dpo@collectpro.com"
  },
  {
    name: "Sophie Laurent",
    position: "Juriste Contrats",
    speciality: "Droit commercial et fintech",
    email: "sophie.laurent@collectpro.com"
  }
];

export function ContactLegalSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
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
              Contact{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Juridique
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Notre équipe juridique est à votre disposition pour répondre à toutes vos questions légales et de conformité.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => method.title === "Formulaire" && setIsContactModalOpen(true)}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                <p className="text-sm font-medium text-gray-900 mb-2">{method.contact}</p>
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {method.response}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legal Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Notre Équipe Juridique</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {legalTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium text-sm mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.speciality}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    {member.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Questions Fréquentes Juridiques</h3>
              <p className="text-blue-100 mb-6">
                Consultez notre FAQ juridique pour trouver rapidement des réponses aux questions les plus courantes.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h4 className="font-semibold mb-2">Conformité RGPD</h4>
                  <p className="text-blue-100 text-sm">Comment nous respectons vos droits</p>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-2">Sécurité des Données</h4>
                  <p className="text-blue-100 text-sm">Nos mesures de protection</p>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-2">Conditions Contractuelles</h4>
                  <p className="text-blue-100 text-sm">Modalités d'utilisation</p>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-2">Responsabilités</h4>
                  <p className="text-blue-100 text-sm">Répartition des obligations</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn btn-accent btn-lg hover:scale-105 transition-transform"
              >
                Poser une question juridique
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Question juridique"
      >
        <ContactForm 
          onClose={() => setIsContactModalOpen(false)}
          title="Poser une question juridique"
          subtitle="Notre équipe juridique vous répondra dans les plus brefs délais"
        />
      </Modal>
    </>
  );
}