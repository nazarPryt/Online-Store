import { createAsyncThunk } from '@reduxjs/toolkit'

import { authService } from '../../services/authService'

export const logInTC = createAsyncThunk(
  'auth/logIn',
  async (data, dispatch) => {
    try {
      return await authService.logIn(data)
    } catch (e) {
      console.log(e)
    }
  }
)
