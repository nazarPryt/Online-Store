import { instance } from './instance'
import axios from 'axios'

export const authService = {
  async logIn(data: LoginDataType) {
    return await instance.post<AuthResponseType>('/api/users/login', data)
  },
  async me() {
    return await instance.get<AuthUserData>('/api/users/me')
  },
  async refreshTokens() {
    return await axios.get<AuthResponseType>(
      `${process.env.REACT_APP_BASE_URL}/api/users/refresh`,
      {
        withCredentials: true,
      }
    )
  },
  async logOut() {
    return await instance.post<'logout'>('/api/users/logout')
  },
  async registration(data: LoginDataType) {
    return await instance.post<AuthResponseType>(
      '/api/users/registration',
      data
    )
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
  user: AuthUserData
}

export type AuthUserData = {
  email: string
  id: string
  isActivated: boolean
  role: 'ADMIN' | 'USER'
}
