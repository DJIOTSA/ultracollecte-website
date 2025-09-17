import { Commission } from '@/payload-types'
import { CollectionBeforeChangeHook } from 'payload'
import { isValidMonthKey } from './../utils/generate-month-key'

export const validateCommissionPayload: CollectionBeforeChangeHook<Commission> = async ({
  data,
}) => {
  const { month, commissions } = data

  // VALIDATE MONTH FORMAT: MM/yyyy
  if (!isValidMonthKey(month || '')) {
    console.warn('Invalid month! The valid format is MM/yyyy')
    return;
  }
  if (!commissions || commissions.length === 0) {
    console.warn('Commissions is required')
    return;
  }
  return data
}
