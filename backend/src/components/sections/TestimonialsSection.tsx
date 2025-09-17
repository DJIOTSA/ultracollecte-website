'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Grâce à cette solution, notre taux de recouvrement a augmenté de 40% et nos agents sont beaucoup plus efficaces sur le terrain. Un investissement qui s'est révélé très rentable.",
    author: "Jean Kouassi",
    position: "Directeur Général",
    company: "CreditPlus Cameroun",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  },
  {
    quote: "L'interface est intuitive et nos équipes ont été formées très rapidement. Les rapports automatisés nous font gagner des heures chaque semaine.",
    author: "Marie Diallo",
    position: "Responsable Opérations",
    company: "MicroFinance Plus Mali",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  },
  {
    quote: "La sécurité des données était notre principale préoccupation. Cette solution répond parfaitement à nos exigences de conformité et de protection.",
    author: "Amadou Traoré",
    position: "Directeur Technique",
    company: "EasyCredit Burkina",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
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
            Ce que disent{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              nos Clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez pourquoi plus de 100 institutions de microfinance nous font confiance pour optimiser leurs opérations.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background Quote Icon */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote className="w-32 h-32 text-primary-600" />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent-500 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-primary-600 font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 hover:shadow-xl transition-all duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-primary-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 hover:shadow-xl transition-all duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-primary-600" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-8">Certifié et approuvé par</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-2 mx-auto"></div>
              <span className="text-sm font-medium text-gray-400">BCEAO</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-2 mx-auto"></div>
              <span className="text-sm font-medium text-gray-400">ISO 27001</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-2 mx-auto"></div>
              <span className="text-sm font-medium text-gray-400">RGPD</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}