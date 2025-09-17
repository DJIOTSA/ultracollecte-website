'use client'
import { contactForm, ContactFormType } from '@/seed/data/forms/ContactForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { Building, Mail, MessageSquare, Send, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import * as z from 'zod'

const getForm = async (): Promise<ContactFormType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/forms?limit=1&where[or][0][and][0][title][equals]=${contactForm.title}&where[or][0][and][1][title][equals]=${contactForm.title}&page=1&depth=2`,
  )
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message)
  }
  if (data.docs.length === 0) {
    throw new Error('Formulaire de contact introuvable')
  }
  return data.docs[0] as ContactFormType
}

interface ContactFormProps {
  onClose?: () => void
  title?: string
  subtitle?: string
}

const formSchema = z.object({
  firstname: z.string().min(1, 'Champ obligatoire'),
  lastname: z.string().min(1, 'Champ obligatoire'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(1, 'Champ obligatoire'),
  company: z.string().min(1, 'Champ obligatoire'),
  role: z.string().optional(),
  object: z.string().min(1, 'Champ obligatoire'),
  message: z.string().min(1, 'Champ obligatoire'),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm({
  onClose,
  title = 'Contactez-nous',
  subtitle = 'Notre équipe vous répondra dans les plus brefs délais',
}: ContactFormProps) {
  const formQuery = useSWR('contact-form', getForm)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    if (!formQuery.data) return

    try {
      const submissionData = Object.entries(data).map(([name, value]) => {
        const field = formQuery.data?.fields.find((f) => f.name === name)
        return {
          field: field?.blockName || name,
          value: value,
        }
      })

      const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: formQuery.data.id,
          submissionData,
        }),
      })

      if (!req.ok) throw new Error('Échec de la soumission')
      reset()
      alert('Message envoyé avec succès ! Nous vous contacterons sous 24h.')
      onClose?.()
    } catch (error) {
      console.error('Erreur de soumission:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    }
  }
  const subjectField = formQuery.data?.fields.find((f) => f.name === 'object')
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <User className="w-5 h-5 mr-2 text-primary-600" />
          Informations personnelles
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
            <input
              {...register('firstname')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Jean"
            />
            {errors.firstname && (
              <p className="mt-1 text-sm text-red-600">{errors.firstname.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
            <input
              {...register('lastname')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Dupont"
            />
            {errors.lastname && (
              <p className="mt-1 text-sm text-red-600">{errors.lastname.message}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Mail className="w-5 h-5 mr-2 text-primary-600" />
          Contact
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email professionnel *
            </label>
            <input
              {...register('email')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="jean.dupont@entreprise.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
            <input
              {...register('phone')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="+33 1 23 45 67 89"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Building className="w-5 h-5 mr-2 text-primary-600" />
          Entreprise
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom de l'institution *
            </label>
            <input
              {...register('company')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="MicroFinance Plus"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Poste</label>
            <input
              {...register('role')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Directeur"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
        <select
          {...register('object')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
        >
          <option value="">Sélectionner un sujet</option>
          {subjectField?.options?.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.object && <p className="mt-1 text-sm text-red-600">{errors.object.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <MessageSquare className="w-4 h-4 mr-2 text-primary-600" />
          Message *
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
          placeholder="Décrivez votre demande ou vos questions..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex space-x-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={isSubmitting || !formQuery.data}
          className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Envoi...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Envoyer le message
            </>
          )}
        </button>
      </div>
    </form>
  )
}
