import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:1337/api/',
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }

    return config
  },
  (error) => Promise.reject(error)
)
//https://stackoverflow.com/questions/68714143/how-can-i-use-axios-interceptors-to-add-some-headers-to-responses
