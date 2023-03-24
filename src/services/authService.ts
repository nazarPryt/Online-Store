import { instance } from './instance'

export const authService = {
  logIn(data: LoginDataType) {
    return instance.post<ResponseType>('auth/local', data)
  },
  me() {
    return instance.get<UserDataResponse>('users/me')
  },
}

//  Types  ///
export type LoginDataType = { identifier: string; password: string }

export type ResponseType = {
  jwt: string
  user: UserDataResponse
}

export type UserDataResponse = {
  blocked: boolean
  confirmed: boolean
  createdAt: string
  email: string
  id: number
  provider: string
  updatedAt: string
  username: string
}
