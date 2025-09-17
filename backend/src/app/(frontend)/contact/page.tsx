import { Navbar } from '@/components/layout/Navbar'
import { ContactForm } from '@/components/forms/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FooterClient } from '@/components/sections/FooterClient'
export default async function ContactPage() {
  const payload = await getPayload({ config: configPromise })
  const contacts = await payload.findGlobal({
    slug: 'contacts',
  })
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contactez{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Notre Équipe
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre
              projet.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600">{contacts.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Téléphone</h4>
                      <p className="text-gray-600">{contacts.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">{contacts.contactEmail}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Horaires</h4>
                      <p className="text-gray-600">
                        Lundi - Vendredi : 9h - 18h
                        <br />
                        Support 24/7 disponible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ContactForm
                title="Envoyez-nous un message"
                subtitle="Remplissez ce formulaire et nous vous répondrons rapidement"
              />
            </div>
          </div>
        </div>
      </section>

      <FooterClient contactsGlobals={contacts} />
    </main>
  )
}
