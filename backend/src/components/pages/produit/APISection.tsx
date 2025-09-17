'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Book, Zap, Shield, Copy, Check } from 'lucide-react';

const codeExample = `// Récupérer les collectes du jour
const response = await fetch('https://api.collectpro.com/v1/collections', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  params: {
    date: '2024-01-15',
    status: 'completed'
  }
});

const collections = await response.json();
console.log(\`\${collections.length} collectes trouvées\`);`;

const endpoints = [
  {
    method: "GET",
    path: "/v1/clients",
    description: "Récupérer la liste des clients",
    color: "bg-green-100 text-green-800"
  },
  {
    method: "POST",
    path: "/v1/collections",
    description: "Créer une nouvelle collecte",
    color: "bg-blue-100 text-blue-800"
  },
  {
    method: "PUT",
    path: "/v1/clients/{id}",
    description: "Mettre à jour un client",
    color: "bg-orange-100 text-orange-800"
  },
  {
    method: "DELETE",
    path: "/v1/collections/{id}",
    description: "Supprimer une collecte",
    color: "bg-red-100 text-red-800"
  }
];

const sdks = [
  {
    name: "JavaScript",
    description: "SDK pour Node.js et navigateurs",
    install: "npm install @collectpro/sdk",
    icon: "🟨"
  },
  {
    name: "Python",
    description: "SDK pour applications Python",
    install: "pip install collectpro-sdk",
    icon: "🐍"
  },
  {
    name: "PHP",
    description: "SDK pour applications PHP",
    install: "composer require collectpro/sdk",
    icon: "🐘"
  },
  {
    name: "Java",
    description: "SDK pour applications Java/Android",
    install: "implementation 'com.collectpro:sdk:1.0.0'",
    icon: "☕"
  }
];

export function APISection() {
  const [copiedCode, setCopiedCode] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="api" className="py-16 md:py-24 bg-white">
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
            API{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Développeur
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Intégrez UltraCollecte dans vos applications avec notre API REST complète et nos SDKs prêts à l'emploi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-900 rounded-2xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="text-sm">Copié!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm">Copier</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </motion.div>

          {/* API Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">API REST Complète</h3>
                <p className="text-gray-600">
                  Accédez à toutes les fonctionnalités de UltraCollecte via notre API REST moderne avec authentification OAuth 2.0.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation Interactive</h3>
                <p className="text-gray-600">
                  Documentation complète avec exemples de code et playground interactif pour tester vos requêtes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-accent-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Webhooks Temps Réel</h3>
                <p className="text-gray-600">
                  Recevez des notifications instantanées des événements importants directement dans vos applications.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité Avancée</h3>
                <p className="text-gray-600">
                  Rate limiting intelligent, authentification sécurisée et chiffrement de bout en bout.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* API Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Endpoints Principaux</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${endpoint.color}`}>
                    {endpoint.method}
                  </span>
                  <code className="text-gray-800 font-mono">{endpoint.path}</code>
                </div>
                <p className="text-gray-600 mt-2">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SDKs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">SDKs Disponibles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{sdk.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{sdk.name}</h4>
                <p className="text-gray-600 mb-4 text-sm">{sdk.description}</p>
                <code className="text-xs bg-gray-100 p-2 rounded block text-gray-800">
                  {sdk.install}
                </code>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à Commencer ?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Obtenez vos clés API et commencez à intégrer UltraCollecte dans vos applications dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.collectpro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Voir la Documentation
              </a>
              <a
                href="https://dashboard.collectpro.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-white border-white/30 hover:bg-white/10"
              >
                Obtenir mes Clés API
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
