import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthUserData } from '../../services/authService'

const initialState = {
  isLoggedIn: false as boolean,
  isInitialized: false as boolean,
  user: {} as AuthUserData,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isLoggedIn = action.payload.value
    },
    setIsInitialized: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isInitialized = action.payload.value
    },
    setUserData: (state, action: PayloadAction<{ user: AuthUserData }>) => {
      state.user = action.payload.user
    },
  },
})

export const { setIsLoggedIn, setIsInitialized, setUserData } =
  authSlice.actions

export const authReducer = authSlice.reducer
