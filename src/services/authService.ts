import { instance } from './instance'

export const authService = {
  logIn(data: LoginDataType) {
    return instance.post<ResponseType>('/api/users/login', data)
  },
  logOut() {
    return instance.post<'logout'>('/api/users/logout')
  },
  registration(data: LoginDataType) {
    return instance.post<ResponseType>('/api/users/registration', data)
  },
}

//  Types  ///
export type LoginDataType = {
  email: string
  password: string
}

export type ResponseType = {
  accessToken: string
  refreshToken: string
  user: ResponseTypeUser
}

export type ResponseTypeUser = {
  email: string
  id: string
  isActivated: boolean
}
