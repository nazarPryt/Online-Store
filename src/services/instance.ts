import axios from 'axios'

import { authService } from './authService'

export const ACCESS_TOKEN = 'access_token'

export const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN)

    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }

    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const res = await authService.refreshTokens()

        localStorage.setItem(ACCESS_TOKEN, res.data.accessToken)

        return instance.request(originalRequest)
      } catch (e) {
        console.log('User is not authorized (in interceptors.response)')
      }
    }
    throw error
  }
)
//https://stackoverflow.com/questions/68714143/how-can-i-use-axios-interceptors-to-add-some-headers-to-responses
