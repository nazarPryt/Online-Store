import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginAccordionType = 'login' | 'register' | 'forgotPass'
export type ThemeAppType = 'light' | 'dark'
const initialState = {
  loginAccordion: 'login' as LoginAccordionType,
  themeApp: 'dark' as ThemeAppType,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoginAccordionAC: (
      state,
      action: PayloadAction<{ value: LoginAccordionType }>
    ) => {
      state.loginAccordion = action.payload.value
    },
    setThemeAppAC: (state, action: PayloadAction<{ value: ThemeAppType }>) => {
      state.themeApp = action.payload.value
    },
  },
})
export const { setLoginAccordionAC, setThemeAppAC } = appSlice.actions
export const appReducer = appSlice.reducer
