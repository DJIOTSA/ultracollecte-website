'use client'

import { demoForm, DemoFormType } from '@/seed/data/forms/DemoForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { Building, Calendar, Mail, MessageSquare, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import * as z from 'zod'

const getDemoForm = async (): Promise<DemoFormType> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/forms?limit=1&where[title][equals]=${demoForm.title}&page=1&depth=2`,
  )
  const data = await res.json()
  if (!res.ok) throw new Error(data.message)
  if (data.docs.length === 0) throw new Error('Formulaire de démo introuvable')
  return data.docs[0] as DemoFormType
}

const formSchema = z.object({
  firstName: z.string().min(1, 'Champ obligatoire'),
  lastName: z.string().min(1, 'Champ obligatoire'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(1, 'Champ obligatoire'),
  company: z.string().min(1, 'Champ obligatoire'),
  position: z.string().min(1, 'Champ obligatoire'),
  clientsCount: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface DemoFormProps {
  onClose: () => void
}

export function DemoForm({ onClose }: DemoFormProps) {
  const { data: demoForm } = useSWR('demo-form', getDemoForm)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    if (!demoForm) return

    try {
      const submissionData = Object.entries(data).map(([name, value]) => {
        const field = demoForm.fields.find((f) => f.name === name)
        return {
          field: field?.blockName || name,
          value,
        }
      })

      const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: demoForm.id,
          submissionData,
        }),
      })
      const respData = await req.json()

      if (!req.ok) throw new Error('Échec de la soumission')
      reset()
      alert('Demande de démo envoyée avec succès ! Nous vous contacterons sous 24h.')
      onClose()
    } catch (err) {
      alert('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  const clientsCountField = demoForm?.fields.find((f) => f.name === 'clientsCount')
  const preferredTimeField = demoForm?.fields.find((f) => f.name === 'preferredTime')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Informations personnelles */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <User className="w-5 h-5 mr-2 text-primary-600" />
          Informations personnelles
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
            <input
              {...register('firstName')}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2"
            />
            {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
            <input
              {...register('lastName')}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2"
            />
            {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Mail className="w-5 h-5 mr-2 text-primary-600" />
          Contact
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email professionnel *
            </label>
            <input
              {...register('email')}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2"
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
            <input
              {...register('phone')}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2"
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
          </div>
        </div>
      </div>

      {/* Entreprise */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Building className="w-5 h-5 mr-2 text-primary-600" />
          Entreprise
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom de l'institution *
            </label>
            <input
              {...register('company')}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2"
            />
            {errors.company && <p className="text-sm text-red-600">{errors.company.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Poste *</label>
              <input
                {...register('position')}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2"
              />
              {errors.position && <p className="text-sm text-red-600">{errors.position.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de clients
              </label>
              <select
                {...register('clientsCount')}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2"
              >
                <option value="">Sélectionner</option>
                {clientsCountField?.options?.map((opt) => (
                  <option key={opt.id} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Planification */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-primary-600" />
          Planification
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date préférée</label>
            <input
              type="date"
              {...register('preferredDate')}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Heure préférée</label>
            <select
              {...register('preferredTime')}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2"
            >
              <option value="">Sélectionner</option>
              {preferredTimeField?.options?.map((opt) => (
                <option key={opt.id} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <MessageSquare className="w-4 h-4 mr-2 text-primary-600" />
          Message (optionnel)
        </label>
        <textarea
          {...register('message')}
          rows={3}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 resize-none"
          placeholder="Décrivez vos besoins spécifiques ou questions..."
        />
      </div>

      {/* Boutons */}
      <div className="flex space-x-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-6 py-3 border text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Envoi...
            </>
          ) : (
            <>
              <Calendar className="w-5 h-5 mr-2" />
              Planifier la démo
            </>
          )}
        </button>
      </div>
    </form>
  )
}
