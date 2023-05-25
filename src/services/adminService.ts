import { instance } from './instance'

export const adminService = {
  getAllUsers() {
    return instance.get<UserTypeChild[]>('api/users')
  },
}

export type UserTypeChild = {
  _id: string
  email: string
  password: string
  activationLink: string
  isActivated: boolean
  role: 'ADMIN' | 'USER'
}
