import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false as boolean,
  isInitialized: false as boolean,
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
  },
})

export const { setIsLoggedIn, setIsInitialized } = authSlice.actions

export const authReducer = authSlice.reducer
