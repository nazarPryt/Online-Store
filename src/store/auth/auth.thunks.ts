import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {
  AuthResponseType,
  authService,
  LoginDataType,
} from '../../services/authService'

import { setIsInitialized, setIsLoggedIn } from './auth.slice'

export const logInTC = createAsyncThunk(
  'auth/logIn',
  async (data: LoginDataType, thunkAPI) => {
    try {
      const res = await authService.logIn(data)

      await localStorage.setItem('access_token', res.data.accessToken)
      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
    } catch (e) {
      console.log(e)
    }
  }
)

export const logOutTC = createAsyncThunk(
  'auth/logOut',
  async (arg, thunkAPI) => {
    try {
      await authService.logOut()

      thunkAPI.dispatch(setIsLoggedIn({ value: false }))
      await localStorage.removeItem('access_token')
    } catch (e) {
      console.log(e)
    }
  }
)

export const RegistrationTC = createAsyncThunk(
  'auth/registration',
  async (data: LoginDataType, thunkAPI) => {
    try {
      const res = await authService.registration(data)

      await localStorage.setItem('access_token', res.data.accessToken)
      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
    } catch (e) {
      console.log(e)
    }
  }
)

export const CheckAuthTC = createAsyncThunk(
  'auth/checkAuth',
  async (arg, thunkAPI) => {
    try {
      const res = await axios.get<AuthResponseType>(
        `${process.env.REACT_APP_BASE_URL}/api/refresh`,
        {
          withCredentials: true,
        }
      )

      await localStorage.setItem('access_token', res.data.accessToken)
      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
    } catch (e) {
      console.log(e)
    } finally {
      thunkAPI.dispatch(setIsInitialized({ value: true }))
    }
  }
)
// export const initializeAppTC = createAsyncThunk(
//   'auth/initialization',
//   async (arg, thunkAPI) => {
//     try {
//       await authService.me()
//
//       thunkAPI.dispatch(setIsLoggedIn({ value: true }))
//       thunkAPI.dispatch(setIsInitialized({ value: true }))
//     } catch (e) {
//       console.log(e)
//     } finally {
//       thunkAPI.dispatch(setIsInitialized({ value: true }))
//     }
//   }
// )
