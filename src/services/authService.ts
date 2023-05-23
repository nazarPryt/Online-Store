import { instance } from './instance'

export const authService = {
  logIn(data: LoginDataType) {
    return instance.post<AuthResponseType>('/api/users/login', data)
  },
  logOut() {
    return instance.post<'logout'>('/api/users/logout')
  },
  registration(data: LoginDataType) {
    return instance.post<AuthResponseType>('/api/users/registration', data)
  },
}

//  Types  ///
export type LoginDataType = {
  email: string
  password: string
}

export type AuthResponseType = {
  accessToken: string
  refreshToken: string
  user: ResponseTypeUser
}

export type ResponseTypeUser = {
  email: string
  id: string
  isActivated: boolean
}
