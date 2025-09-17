'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Modal } from '@/components/ui/modal'
import { ContactForm } from '@/components/forms/ContactForm'
import { DemoForm } from '@/components/forms/DemoForm'
import Image from 'next/image'

const navigation = {
  produit: [
    { name: 'Fonctionnalités', href: '/features' },
    { name: 'Sécurité', href: '/security' },
    { name: 'Intégrations', href: '/integrations' },
    { name: 'API', href: '/api' },
  ],
  entreprise: [
    { name: 'À propos', href: '/about' },
    { name: 'Équipe', href: '/entreprise#team' },
    { name: 'Carrières', href: '/careers' },
    { name: 'Presse', href: '/press' },
  ],
  ressources: [
    { name: "Centre d'aide", href: '/help' },
    { name: 'Blog', href: '/blog' },
    { name: 'Guides', href: '/guides' },
    { name: 'Webinaires', href: '/webinars' },
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Produit Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('produit')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors py-2"
                >
                  <span className="font-medium">Produit</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'produit' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={closeDropdown}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2"
                    >
                      {navigation.produit.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors group"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Entreprise Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('entreprise')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors py-2"
                >
                  <span className="font-medium">Entreprise</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'entreprise' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={closeDropdown}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2"
                    >
                      {navigation.entreprise.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors group"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Ressources Dropdown */}
              <div className="relative group">
                <button
                  onMouseEnter={() => setActiveDropdown('ressources')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors py-2"
                >
                  <span className="font-medium">Ressources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'ressources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={closeDropdown}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2"
                    >
                      {navigation.ressources.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors group"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tarification */}
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Tarification
              </Link>

              {/* Légal */}
              <Link
                href="/legal"
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Légal
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                Voir la démo
              </button>
              <button onClick={() => setIsContactModalOpen(true)} className="btn btn-primary">
                Commencer gratuitement
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
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
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="container mx-auto px-4 py-6 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  <Link
                    href="/produit"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    Produit
                  </Link>
                  <Link
                    href="/entreprise"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    Entreprise
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    Tarification
                  </Link>
                  <Link
                    href="/legal"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    Légal
                  </Link>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsDemoModalOpen(true)
                      closeMobileMenu()
                    }}
                    className="w-full btn btn-ghost"
                  >
                    Voir la démo
                  </button>
                  <button
                    onClick={() => {
                      setIsContactModalOpen(true)
                      closeMobileMenu()
                    }}
                    className="w-full btn btn-primary"
                  >
                    Commencer gratuitement
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20"></div>

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
