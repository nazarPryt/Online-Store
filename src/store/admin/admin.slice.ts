import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserTypeChild } from '../../services/adminService'

const initialState = {
  users: [] as UserTypeChild[],
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAllUsersAC: (
      state,
      action: PayloadAction<{ users: UserTypeChild[] }>
    ) => {
      state.users = action.payload.users
    },
  },
})
export const { setAllUsersAC } = adminSlice.actions
export const adminReducer = adminSlice.reducer
