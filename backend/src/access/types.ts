import { Membership } from '@/payload-types'
import { User } from 'payload'

export type CompanyProfile = {
  microfinance: string
  role: Membership['role']
  status: Membership['status']
}
export type UserWithCompanyProfiles = User & {
  profiles: Record<string, CompanyProfile>
}

export type CompanyProfilesObject = Record<string, CompanyProfile>
