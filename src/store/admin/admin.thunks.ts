import { createAsyncThunk } from '@reduxjs/toolkit'

import { adminService } from '../../services/adminService'
import { setIsLoggedIn } from '../auth/auth.slice'

import { setAllUsersAC } from './admin.slice'

export const GetAllUsersTC = createAsyncThunk(
  'admin/getAllUsers',
  async (arg, thunkAPI) => {
    try {
      const res = await adminService.getAllUsers()

      thunkAPI.dispatch(setAllUsersAC({ users: res.data }))

      thunkAPI.dispatch(setIsLoggedIn({ value: true }))
    } catch (e) {
      console.log(e)
    }
  }
)
