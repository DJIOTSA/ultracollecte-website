'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Grâce à cette solution, notre taux de recouvrement a augmenté de 40% et nos agents sont beaucoup plus efficaces sur le terrain. Un investissement qui s'est révélé très rentable.",
    author: "Jean Kouassi",
    position: "Directeur Général",
    company: "CreditPlus Cameroun",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    improvement: "+40% de recouvrement",
    color: "from-emerald-500 to-teal-600"
  },
  {
    quote: "L'interface est intuitive et nos équipes ont été formées très rapidement. Les rapports automatisés nous font gagner des heures chaque semaine.",
    author: "Marie Diallo",
    position: "Responsable Opérations",
    company: "MicroFinance Plus Mali",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    improvement: "5h économisées/semaine",
    color: "from-blue-500 to-indigo-600"
  },
  {
    quote: "La sécurité des données était notre principale préoccupation. Cette solution répond parfaitement à nos exigences de conformité et de protection.",
    author: "Amadou Traoré",
    position: "Directeur Technique",
    company: "EasyCredit Burkina",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    improvement: "100% conformité RGPD",
    color: "from-purple-500 to-pink-600"
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
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%2310b981" fill-opacity="0.02"%3E%3Cpolygon points="50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40"/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full px-6 py-3 mb-8"
          >
            <Star className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            <span className="font-semibold text-gray-700">Témoignages Clients</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Ce que disent{' '}
            <span className="gradient-text">
              nos Clients
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Découvrez pourquoi plus de 100 institutions de microfinance nous font confiance pour optimiser leurs opérations.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border-2 border-gray-100">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full blur-3xl opacity-50"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-emerald-600" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex justify-center mb-8">
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl text-gray-700 text-center leading-relaxed mb-8 font-semibold">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author Section */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].author}
                        className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-lg"
                      />
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-full border-4 border-white flex items-center justify-center`}>
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {testimonials[currentIndex].position}
                      </p>
                      <p className="text-emerald-600 font-bold">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Improvement Badge */}
                  <div className={`bg-gradient-to-r ${testimonials[currentIndex].color} rounded-2xl px-6 py-4 text-white text-center`}>
                    <div className="text-2xl font-black mb-1">
                      {testimonials[currentIndex].improvement}
                    </div>
                    <p className="text-sm opacity-90">Amélioration mesurée</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center space-x-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:bg-emerald-50 hover:shadow-2xl hover:scale-110 transition-all duration-300 group border-2 border-gray-100 hover:border-emerald-200"
            >
              <ChevronLeft className="w-8 h-8 text-gray-600 group-hover:text-emerald-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center hover:bg-emerald-50 hover:shadow-2xl hover:scale-110 transition-all duration-300 group border-2 border-gray-100 hover:border-emerald-200"
            >
              <ChevronRight className="w-8 h-8 text-gray-600 group-hover:text-emerald-600" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 w-12'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-black text-emerald-600 mb-2">100+</div>
              <p className="text-gray-600 font-medium">Institutions satisfaites</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-black text-blue-600 mb-2">4.9/5</div>
              <p className="text-gray-600 font-medium">Note moyenne</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-black text-purple-600 mb-2">99%</div>
              <p className="text-gray-600 font-medium">Taux de recommandation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}