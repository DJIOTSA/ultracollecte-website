'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Cookie, Settings, BarChart3, Shield, ToggleLeft, ToggleRight } from 'lucide-react';

const cookieCategories = [
  {
    icon: Shield,
    title: "Cookies Essentiels",
    description: "Nécessaires au fonctionnement du site et ne peuvent pas être désactivés.",
    required: true,
    enabled: true,
    examples: ["Authentification", "Sécurité", "Préférences de langue"]
  },
  {
    icon: BarChart3,
    title: "Cookies Analytiques",
    description: "Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.",
    required: false,
    enabled: true,
    examples: ["Google Analytics", "Mesure d'audience", "Parcours utilisateur"]
  },
  {
    icon: Settings,
    title: "Cookies Fonctionnels",
    description: "Améliorent votre expérience en mémorisant vos préférences.",
    required: false,
    enabled: false,
    examples: ["Préférences d'affichage", "Paramètres sauvegardés", "Contenu personnalisé"]
  }
];

export function CookiesSection() {
  const [cookieSettings, setCookieSettings] = useState(
    cookieCategories.reduce((acc, category) => {
      acc[category.title] = category.enabled;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const toggleCookie = (categoryTitle: string) => {
    const category = cookieCategories.find(c => c.title === categoryTitle);
    if (category && !category.required) {
      setCookieSettings(prev => ({
        ...prev,
        [categoryTitle]: !prev[categoryTitle]
      }));
    }
  };

  const acceptAll = () => {
    const newSettings = cookieCategories.reduce((acc, category) => {
      acc[category.title] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setCookieSettings(newSettings);
  };

  const rejectOptional = () => {
    const newSettings = cookieCategories.reduce((acc, category) => {
      acc[category.title] = category.required;
      return acc;
    }, {} as Record<string, boolean>);
    setCookieSettings(newSettings);
  };

  return (
    <section id="cookies" className="py-16 md:py-24 bg-gray-50">
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
            Gestion des{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Cookies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez personnaliser vos préférences à tout moment.
          </p>
        </motion.div>

        {/* Cookie Categories */}
        <div className="space-y-6 mb-12">
          {cookieCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                      {category.required && (
                        <span className="text-sm text-orange-600 font-medium">Obligatoire</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Exemples :</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="ml-6">
                  <button
                    onClick={() => toggleCookie(category.title)}
                    disabled={category.required}
                    className={`flex items-center space-x-2 ${
                      category.required 
                        ? 'cursor-not-allowed opacity-50' 
                        : 'cursor-pointer hover:scale-105 transition-transform'
                    }`}
                  >
                    {cookieSettings[category.title] ? (
                      <ToggleRight className="w-8 h-8 text-green-500" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cookie Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center"
        >
          <Cookie className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Gérer vos Préférences</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Vous pouvez modifier vos préférences de cookies à tout moment. Vos choix seront sauvegardés et appliqués lors de vos prochaines visites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={acceptAll}
              className="btn btn-primary btn-lg"
            >
              Accepter tous les cookies
            </button>
            <button
              onClick={rejectOptional}
              className="btn btn-ghost btn-lg"
            >
              Refuser les cookies optionnels
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Vos préférences sont sauvegardées localement et n'affectent que ce navigateur.
          </p>
        </motion.div>

        {/* Technical Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gray-900 rounded-2xl p-8 text-white"
        >
          <h3 className="text-xl font-bold mb-6">Informations Techniques</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Durée de Conservation</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Cookies de session : Supprimés à la fermeture du navigateur</li>
                <li>• Cookies persistants : 13 mois maximum</li>
                <li>• Cookies analytiques : 26 mois maximum</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Gestion dans votre Navigateur</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Chrome : Paramètres → Confidentialité → Cookies</li>
                <li>• Firefox : Préférences → Vie privée → Cookies</li>
                <li>• Safari : Préférences → Confidentialité → Cookies</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}