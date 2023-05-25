import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import {
  AuthResponseType,
  authService,
  LoginDataType,
} from '../../services/authService'
import { ACCESS_TOKEN } from '../../services/instance'

import { setIsInitialized, setIsLoggedIn, setUserData } from './auth.slice'

export const logInTC = createAsyncThunk(
  'auth/logIn',
  async (data: LoginDataType, thunkAPI) => {
    try {
      const res = await authService.logIn(data)

      await localStorage.setItem(ACCESS_TOKEN, res.data.accessToken)
      thunkAPI.dispatch(setUserData({ user: res.data.user }))
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
      thunkAPI.dispatch(setUserData({ user: res.data.user }))
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
      const res = await axios.get<AuthResponseType>(
        `${process.env.REACT_APP_BASE_URL}/api/users/refresh`,
        {
          withCredentials: true,
        }
      )

      await localStorage.setItem(ACCESS_TOKEN, res.data.accessToken)
      thunkAPI.dispatch(setUserData({ user: res.data.user }))
      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
    } catch (e) {
      console.log(e)
    } finally {
      thunkAPI.dispatch(setIsInitialized({ value: true }))
    }
  }
)
