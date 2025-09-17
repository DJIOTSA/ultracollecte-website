'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: "Jean-Baptiste Kouassi",
    position: "CEO & Co-fondateur",
    bio: "15 ans d'expérience dans la fintech africaine. Ancien directeur technique chez Orange Money.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "jb.kouassi@collectpro.com"
    }
  },
  {
    name: "Marie Diallo",
    position: "CTO & Co-fondatrice",
    bio: "Experte en architecture cloud et sécurité. Diplômée de l'École Polytechnique et Stanford.",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marie.diallo@collectpro.com"
    }
  },
  {
    name: "Amadou Traoré",
    position: "Directeur Produit",
    bio: "Spécialiste UX/UI avec 10 ans d'expérience dans les produits financiers mobiles.",
    image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amadou.traore@collectpro.com"
    }
  },
  {
    name: "Sarah Mensah",
    position: "Directrice Commerciale",
    bio: "Experte en développement commercial B2B avec un focus sur les marchés émergents.",
    image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah.mensah@collectpro.com"
    }
  },
  {
    name: "David Okonkwo",
    position: "Directeur Technique",
    bio: "Architecte logiciel senior spécialisé dans les systèmes distribués et la blockchain.",
    image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david.okonkwo@collectpro.com"
    }
  },
  {
    name: "Fatou Sow",
    position: "Directrice Marketing",
    bio: "Stratège marketing digital avec une expertise dans la croissance des startups fintech.",
    image: "https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fatou.sow@collectpro.com"
    }
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
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
              Équipe
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rencontrez les experts passionnés qui construisent l'avenir de la microfinance digitale en Afrique.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center h-full">
                {/* Photo */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary-100 group-hover:border-primary-300 transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white"></div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors group/social"
                  >
                    <Linkedin className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-400 transition-colors group/social"
                  >
                    <Twitter className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors group/social"
                  >
                    <Mail className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Rejoignez Notre Équipe</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Nous recherchons constamment des talents passionnés pour nous aider à révolutionner la microfinance en Afrique.
            </p>
            <a
              href="#careers"
              className="btn btn-accent btn-lg hover:scale-105 transition-transform"
            >
              Voir nos offres d'emploi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}