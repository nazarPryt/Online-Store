import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { authService, LoginDataType } from '../../services/authService'
import { ACCESS_TOKEN } from '../../services/instance'

import { setIsInitialized, setIsLoggedIn, setUserData } from './auth.slice'

export const logInTC = createAsyncThunk(
  'auth/logIn',
  async (data: LoginDataType, thunkAPI) => {
    try {
      const res = await authService.logIn(data)

      await localStorage.setItem(ACCESS_TOKEN, res.data.accessToken)
      thunkAPI.dispatch(setUserData(res.data.user))
      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
    } catch (e: any) {
      console.log(e)
      toast.error(e.response.data.message)
    }
  }
)

export const logOutTC = createAsyncThunk(
  'auth/logOut',
  async (arg, thunkAPI) => {
    try {
      await authService.logOut()

      thunkAPI.dispatch(setIsLoggedIn({ value: false }))
      await localStorage.removeItem(ACCESS_TOKEN)
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

      await localStorage.setItem(ACCESS_TOKEN, res.data.accessToken)
      thunkAPI.dispatch(setUserData(res.data.user))
      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
    } catch (e) {
      console.log(e)
    }
  }
)

export const CheckAuthTC = createAsyncThunk(
  'auth/checkAuth',
  async (arg, thunkAPI) => {
    thunkAPI.dispatch(setIsInitialized({ value: false }))
    try {
      const res = await authService.me()
      console.log('res', res)
      thunkAPI.dispatch(setUserData(res.data))
      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
    } catch (e) {
      console.log(e)
    } finally {
      thunkAPI.dispatch(setIsInitialized({ value: true }))
    }
  }
)
