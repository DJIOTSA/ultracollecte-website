'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Modal } from '@/components/ui/modal';
import { ContactForm } from '@/components/forms/ContactForm';

const faqs = [
  {
    question: "Comment sécurisez-vous les données financières de nos clients ?",
    answer: "Nous utilisons un chiffrement AES-256 de niveau bancaire pour toutes les données. Notre infrastructure est conforme aux normes RGPD et nous effectuons des audits de sécurité réguliers. Toutes les communications sont chiffrées SSL/TLS et nous disposons d'une authentification multi-facteurs pour tous les accès administrateur."
  },
  {
    question: "Combien de temps faut-il pour déployer la solution dans notre institution ?",
    answer: "Le déploiement standard prend entre 2 à 4 semaines selon la taille de votre institution. Cela inclut la configuration initiale, la migration des données existantes, la formation de vos équipes et les tests de validation. Nous vous accompagnons à chaque étape pour garantir une transition en douceur."
  },
  {
    question: "La solution fonctionne-t-elle sans connexion internet ?",
    answer: "Oui, nos applications mobiles fonctionnent en mode hors-ligne. Les agents peuvent continuer à enregistrer les transactions même sans connexion internet. Dès que la connexion est rétablie, toutes les données sont automatiquement synchronisées avec le serveur central."
  },
  {
    question: "Proposez-vous une formation pour nos équipes ?",
    answer: "Absolument ! Nous incluons une formation complète dans tous nos plans. Cela comprend des sessions de formation en ligne, des guides utilisateur détaillés, et un support continu. Pour les plans Enterprise, nous proposons également des formations sur site avec vos équipes."
  },
  {
    question: "Peut-on intégrer la solution avec nos systèmes existants ?",
    answer: "Oui, notre solution dispose d'API REST complètes permettant l'intégration avec la plupart des systèmes bancaires et comptables existants. Nous proposons également des connecteurs pré-configurés pour les systèmes les plus courants dans le secteur de la microfinance."
  },
  {
    question: "Que se passe-t-il si nous dépassons les limites de notre plan ?",
    answer: "Nous vous prévenons à l'avance lorsque vous approchez des limites de votre plan. Vous pouvez facilement passer à un plan supérieur ou ajouter des modules complémentaires. Il n'y a jamais d'interruption de service, nous facturons simplement les dépassements selon un tarif transparent."
  },
  {
    question: "Quel niveau de support technique proposez-vous ?",
    answer: "Tous nos plans incluent un support technique par email et téléphone pendant les heures ouvrables. Les plans Professional et Enterprise bénéficient d'un support prioritaire. Le plan Enterprise inclut un support dédié 24/7 avec un gestionnaire de compte attitré."
  },
  {
    question: "Comment gérez-vous les mises à jour et la maintenance ?",
    answer: "Toutes les mises à jour sont automatiques et transparentes pour les utilisateurs. Nous effectuons la maintenance durant les heures creuses pour minimiser l'impact. Les nouvelles fonctionnalités sont régulièrement ajoutées sans frais supplémentaires selon votre plan d'abonnement."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              Questions{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Fréquentes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Retrouvez les réponses aux questions les plus courantes sur notre solution de collecte journalière.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-2xl"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center transition-all duration-200 ${
                      openIndex === index ? 'bg-primary-600 rotate-180' : 'hover:bg-primary-200'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-primary-600" />
                      )}
                    </div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-l-4 border-primary-200 pl-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe d'experts est là pour répondre à toutes vos questions spécifiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-primary btn-lg"
                >
                  Contactez notre équipe
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-ghost btn-lg"
                >
                  Planifier un appel
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
        title="Contactez notre équipe"
      >
        <ContactForm 
          onClose={() => setIsContactModalOpen(false)}
          title="Contactez notre équipe"
          subtitle="Posez-nous vos questions, nous vous répondrons rapidement"
        />
      </Modal>
    </>
  );
}