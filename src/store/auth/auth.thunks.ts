import { createAsyncThunk } from '@reduxjs/toolkit'

import { authService, LoginDataType } from '../../services/authService'

import { setIsInitialized, setIsLoggedIn } from './auth.slice'

export const logInTC = createAsyncThunk(
  'auth/logIn',
  async (data: LoginDataType, thunkAPI) => {
    try {
      const res = await authService.logIn(data)

      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
      await localStorage.setItem('auth_token', res.data.jwt)
    } catch (e) {
      console.log(e)
    }
  }
)

export const initializeAppTC = createAsyncThunk(
  'auth/initialization',
  async (arg, thunkAPI) => {
    try {
      await authService.me()

      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
      thunkAPI.dispatch(setIsInitialized({ value: true }))
    } catch (e) {
      console.log(e)
    } finally {
      thunkAPI.dispatch(setIsInitialized({ value: true }))
    }
  }
)
