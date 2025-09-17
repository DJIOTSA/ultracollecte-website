import type { Access } from 'payload'

export const isAdmin: Access = async ({ req }) => {
  return req.user?.collection === 'admins'
}
