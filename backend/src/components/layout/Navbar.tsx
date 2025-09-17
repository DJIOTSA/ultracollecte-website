'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Modal } from '@/components/ui/modal'
import { ContactForm } from '@/components/forms/ContactForm'
import { DemoForm } from '@/components/forms/DemoForm'
import Image from 'next/image'

const navigation = {
  produit: [
    { name: 'Fonctionnalités', href: '/features', description: 'Découvrez nos outils avancés' },
    { name: 'Sécurité', href: '/security', description: 'Protection de niveau bancaire' },
    { name: 'Intégrations', href: '/integrations', description: 'Connectez vos systèmes' },
    { name: 'API', href: '/api', description: 'Documentation développeur' },
  ],
  entreprise: [
    { name: 'À propos', href: '/about', description: 'Notre histoire et mission' },
    { name: 'Équipe', href: '/entreprise#team', description: 'Rencontrez notre équipe' },
    { name: 'Carrières', href: '/careers', description: 'Rejoignez-nous' },
    { name: 'Presse', href: '/press', description: 'Actualités et médias' },
  ],
  ressources: [
    { name: "Centre d'aide", href: '/help', description: 'Support et documentation' },
    { name: 'Blog', href: '/blog', description: 'Articles et conseils' },
    { name: 'Guides', href: '/guides', description: 'Guides pratiques' },
    { name: 'Webinaires', href: '/webinars', description: 'Formations en ligne' },
  ],
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeDropdown = () => setActiveDropdown(null)
  const closeMobileMenu = () => setIsOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/icon.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-2xl group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">
                  UltraCollecte
                </span>
                <span className="text-xs text-gray-500 -mt-1">Microfinance Solution</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Produit Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('produit')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-all duration-300 py-2 font-medium"
                >
                  <span>Produit</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'produit' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={closeDropdown}
                      className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100/50 py-4 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50"></div>
                      <div className="relative">
                        {navigation.produit.map((item, index) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start px-6 py-4 hover:bg-white/60 transition-all duration-300 group"
                          >
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                  {item.name}
                                </span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-emerald-600" />
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Entreprise Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('entreprise')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-all duration-300 py-2 font-medium"
                >
                  <span>Entreprise</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'entreprise' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={closeDropdown}
                      className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100/50 py-4 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50"></div>
                      <div className="relative">
                        {navigation.entreprise.map((item, index) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start px-6 py-4 hover:bg-white/60 transition-all duration-300 group"
                          >
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                  {item.name}
                                </span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-purple-600" />
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Ressources Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('ressources')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 font-medium"
                >
                  <span>Ressources</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'ressources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={closeDropdown}
                      className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100/50 py-4 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
                      <div className="relative">
                        {navigation.ressources.map((item, index) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start px-6 py-4 hover:bg-white/60 transition-all duration-300 group"
                          >
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {item.name}
                                </span>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-blue-600" />
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Links */}
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
              >
                Tarification
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                href="/legal"
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
              >
                Légal
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium px-4 py-2 rounded-xl hover:bg-emerald-50"
              >
                Voir la démo
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)} 
                className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Commencer gratuitement
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-gray-100 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 relative z-10" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 relative z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50 shadow-2xl"
            >
              <div className="container mx-auto px-4 py-8 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  <Link
                    href="/produit"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium text-lg"
                  >
                    Produit
                  </Link>
                  <Link
                    href="/entreprise"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-purple-600 transition-colors font-medium text-lg"
                  >
                    Entreprise
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg"
                  >
                    Tarification
                  </Link>
                  <Link
                    href="/legal"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium text-lg"
                  >
                    Légal
                  </Link>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsDemoModalOpen(true)
                      closeMobileMenu()
                    }}
                    className="w-full py-4 text-gray-700 hover:text-emerald-600 transition-colors font-medium text-lg border border-gray-200 rounded-2xl hover:border-emerald-200 hover:bg-emerald-50"
                  >
                    Voir la démo
                  </button>
                  <button
                    onClick={() => {
                      setIsContactModalOpen(true)
                      closeMobileMenu()
                    }}
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Commencer gratuitement
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Modals */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Commencer gratuitement"
      >
        <ContactForm
          onClose={() => setIsContactModalOpen(false)}
          title="Commencer votre essai gratuit"
          subtitle="Remplissez ce formulaire pour démarrer votre période d'essai de 14 jours"
        />
      </Modal>

      <Modal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        title="Planifier une démo"
      >
        <DemoForm onClose={() => setIsDemoModalOpen(false)} />
      </Modal>
    </>
  )
}