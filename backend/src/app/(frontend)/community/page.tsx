import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/sections/Footer'
import { Users, MessageSquare, Heart, Award, ArrowRight } from 'lucide-react'

const communityStats = [
  { icon: Users, value: '2,500+', label: 'Membres actifs' },
  { icon: MessageSquare, value: '15k+', label: 'Discussions' },
  { icon: Heart, value: '98%', label: 'Satisfaction' },
  { icon: Award, value: '50+', label: 'Experts' },
]

const communityFeatures = [
  {
    title: 'Forum de Discussion',
    description:
      "Échangez avec d'autres professionnels sur les défis et solutions de la microfinance.",
    icon: MessageSquare,
  },
  {
    title: 'Groupes Spécialisés',
    description: 'Rejoignez des groupes thématiques selon vos intérêts et votre expertise.',
    icon: Users,
  },
  {
    title: 'Événements Exclusifs',
    description: 'Participez à des événements réservés aux membres de la communauté.',
    icon: Award,
  },
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Notre{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Communauté
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rejoignez une communauté dynamique de professionnels de la microfinance et partagez
              vos expériences.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {communityStats.map((stat, index) => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <stat.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Community Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {communityFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <feature.icon className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à rejoindre la communauté ?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Connectez-vous avec des professionnels partageant les mêmes idées et développez votre
              réseau.
            </p>
            <button className="btn btn-accent btn-lg group">
              Rejoindre maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
