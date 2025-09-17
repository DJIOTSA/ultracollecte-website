'use client'

import { Contact } from '@/payload-types'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = {
  product: [
    { name: 'Fonctionnalités', href: '/features' },
    { name: 'Tarification', href: '/pricing' },
    { name: 'Sécurité', href: '/security' },
    { name: 'API Documentation', href: '/api' },
    { name: 'Intégrations', href: '/integrations' },
  ],
  company: [
    { name: 'À propos', href: '/about' },
    { name: 'Carrières', href: '/careers' },
    { name: 'Presse', href: '/press' },
    { name: 'Partenaires', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: "Centre d'aide", href: '/help' },
    { name: 'Blog', href: '/blog' },
    { name: 'Guides', href: '/guides' },
    { name: 'Webinaires', href: '/webinars' },
    { name: 'Communauté', href: '/community' },
  ],
  legal: [
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: "Conditions d'utilisation", href: '/terms' },
    { name: 'RGPD', href: '/gdpr' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Mentions légales', href: '/legal' },
  ],
}
export async function FooterClient({ contactsGlobals }: { contactsGlobals: Contact }) {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <Link href="/" className="flex items-center space-x-2 group">
                <Image
                  src="/icon.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform"
                ></Image>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  UltraCollecte
                </span>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                La solution de référence pour la collecte journalière des institutions de
                microfinance. Optimisez vos opérations et augmentez votre taux de recouvrement avec
                notre plateforme sécurisée.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">{contactsGlobals.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">{contactsGlobals.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">{contactsGlobals.contactEmail}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: contactsGlobals.facebook || '#' },
                { icon: Twitter, href: contactsGlobals.twitter || '#' },
                { icon: Linkedin, href: contactsGlobals.linkedin || '#' },
                { icon: Instagram, href: contactsGlobals.instagram || '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-6">Produit</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 group flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg mb-6">Entreprise</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 group flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold text-lg mb-6">Ressources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 group flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-semibold text-lg mb-6">Légal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 group flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-0 lg:flex-1">
              <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
              <p className="text-gray-400">
                Recevez les dernières actualités et conseils sur la microfinance digitale.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="min-w-0 flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-r-lg hover:from-primary-700 hover:to-secondary-700 transition-colors duration-200 group">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 UltraCollecte. Tous droits réservés.</span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-accent-400" />
                  <span>Sécurisé SSL</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4 text-accent-400" />
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4 text-accent-400" />
                  <span>RGPD Conforme</span>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:mt-0">
              <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>🇫🇷 Français</option>
                <option>🇬🇧 English</option>
                <option>🇪🇸 Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
