'use client';

import { motion } from 'framer-motion';
import { FileText, Users, CreditCard, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const termsPoints = [
  {
    icon: Users,
    title: "Conditions d'Accès",
    content: "L'accès à UltraCollecte est réservé aux institutions de microfinance légalement constituées et à leurs agents autorisés. Un processus de vérification est requis."
  },
  {
    icon: CreditCard,
    title: "Modalités de Paiement",
    content: "Les frais d'abonnement sont facturés mensuellement ou annuellement selon votre plan. Le paiement s'effectue par virement bancaire ou carte de crédit."
  },
  {
    icon: Shield,
    title: "Responsabilités",
    content: "Vous êtes responsable de la sécurité de vos identifiants et de l'utilisation conforme du service par vos équipes. Nous garantissons la disponibilité du service à 99.9%."
  },
  {
    icon: AlertTriangle,
    title: "Limitations",
    content: "Notre responsabilité est limitée aux dommages directs. Nous ne saurions être tenus responsables des pertes de données dues à une utilisation non conforme."
  },
  {
    icon: CheckCircle,
    title: "Propriété Intellectuelle",
    content: "UltraCollecte et tous ses composants sont protégés par le droit d'auteur. Vous disposez d'un droit d'usage non exclusif pendant la durée de votre abonnement."
  },
  {
    icon: FileText,
    title: "Résiliation",
    content: "Vous pouvez résilier votre abonnement à tout moment avec un préavis de 30 jours. Nous nous réservons le droit de suspendre l'accès en cas de non-paiement."
  }
];

export function TermsSection() {
  return (
    <section id="terms" className="py-16 md:py-24 bg-gray-50">
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
            Conditions Générales{' '}
            <span className="bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent">
              d'Utilisation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ces conditions régissent l'utilisation de notre plateforme et définissent les droits et obligations de chaque partie.
          </p>
        </motion.div>

        {/* Terms Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {termsPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Conditions Détaillées</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Article 1 - Objet</h4>
              <p className="text-gray-600 leading-relaxed">
                Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation de la plateforme UltraCollecte, service de gestion de collecte journalière destiné aux institutions de microfinance.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Article 2 - Acceptation des Conditions</h4>
              <p className="text-gray-600 leading-relaxed">
                L'utilisation de UltraCollecte implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser notre service.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Article 3 - Description du Service</h4>
              <p className="text-gray-600 leading-relaxed">
                UltraCollecte est une plateforme SaaS qui permet aux institutions de microfinance de gérer leurs opérations de collecte journalière, incluant la gestion des clients, le suivi des transactions, la génération de rapports et la synchronisation des données.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Article 4 - Inscription et Compte Utilisateur</h4>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li>• L'inscription nécessite la fourniture d'informations exactes et à jour</li>
                <li>• Chaque utilisateur est responsable de la confidentialité de ses identifiants</li>
                <li>• Un processus de vérification peut être requis avant l'activation du compte</li>
                <li>• Vous devez notifier immédiatement tout usage non autorisé de votre compte</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Article 5 - Obligations de l'Utilisateur</h4>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li>• Utiliser le service conformément à sa destination et aux lois applicables</li>
                <li>• Ne pas tenter de contourner les mesures de sécurité</li>
                <li>• Respecter les droits de propriété intellectuelle</li>
                <li>• Maintenir la confidentialité des données clients</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Article 6 - Tarification et Facturation</h4>
              <p className="text-gray-600 leading-relaxed">
                Les tarifs sont indiqués sur notre site web et peuvent être modifiés avec un préavis de 30 jours. La facturation s'effectue selon la périodicité choisie (mensuelle ou annuelle). En cas de retard de paiement, l'accès au service peut être suspendu.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Article 7 - Résiliation</h4>
              <p className="text-gray-600 leading-relaxed">
                Vous pouvez résilier votre abonnement à tout moment depuis votre espace client avec un préavis de 30 jours. Nous nous réservons le droit de résilier le contrat en cas de manquement grave aux présentes conditions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Article 8 - Droit Applicable</h4>
              <p className="text-gray-600 leading-relaxed">
                Les présentes CGU sont soumises au droit français. Tout litige sera de la compétence exclusive des tribunaux de Paris, sauf disposition légale contraire.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
