'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      title: t('products.ultracollecte.title'),
      description: t('products.ultracollecte.description'),
      href: 'https://payment-server.ultrasoft.cm/',
      external: true,
    },
    {
      title: t('products.auboulot.title'),
      description: t('products.auboulot.description'),
      href: '#',
      external: false,
    },
    {
      title: t('products.paymentSolutions.title'),
      description: t('products.paymentSolutions.description'),
      href: '#',
      external: false,
    },
  ];

  const services = [
    {
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      href: '#services',
    },
    {
      title: t('services.development.title'),
      description: t('services.development.description'),
      href: '#services',
    },
    {
      title: t('services.integration.title'),
      description: t('services.integration.description'),
      href: '#services',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-xl font-bold gradient-text">
              Ultrasoft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors">
                    {t('navigation.products')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:w-[600px] lg:grid-cols-2">
                      {products.map((product) => (
                        <NavigationMenuLink key={product.title} asChild>
                          <a
                            href={product.href}
                            target={product.external ? '_blank' : '_self'}
                            rel={product.external ? 'noopener noreferrer' : ''}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {product.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {product.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors">
                    {t('navigation.services')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.title} asChild>
                          <a
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href={`/${locale}#about`}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {t('navigation.about')}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href={`/${locale}#contact`}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {t('navigation.contact')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <Link
                href="/en"
                className={`text-sm font-medium transition-colors ${
                  locale === 'en' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                EN
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/fr"
                className={`text-sm font-medium transition-colors ${
                  locale === 'fr' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                FR
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              {t('contact.title')}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-6">
                <Link
                  href={`/${locale}#products`}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navigation.products')}
                </Link>
                <Link
                  href={`/${locale}#services`}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navigation.services')}
                </Link>
                <Link
                  href={`/${locale}#about`}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navigation.about')}
                </Link>
                <Link
                  href={`/${locale}#contact`}
                  className="text-lg font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('navigation.contact')}
                </Link>
                <div className="flex items-center space-x-4 pt-4 border-t">
                  <Link
                    href="/en"
                    className={`text-sm font-medium transition-colors ${
                      locale === 'en' ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    English
                  </Link>
                  <Link
                    href="/fr"
                    className={`text-sm font-medium transition-colors ${
                      locale === 'fr' ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    Français
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}