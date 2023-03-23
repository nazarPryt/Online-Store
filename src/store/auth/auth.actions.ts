import { createAsyncThunk } from '@reduxjs/toolkit'

import { authService, LoginDataType } from '../../services/authService'

export const logInTC = createAsyncThunk(
  'auth/logIn',
  async (data: LoginDataType, dispatch) => {
    try {
      const res = await authService.logIn(data)

      await localStorage.setItem('auth_token', res.data.jwt)
    } catch (e) {
      console.log(e)
    }
  }
)

// export const saveToken = createAsyncThunk(
//   'auth/saveToken',
//   async (token: string, dispatch) => {
//     try {
//       await localStorage.setItem('auth_token', token)
//     } catch (e) {
//       console.log(e)
//     }
//   }
// )
