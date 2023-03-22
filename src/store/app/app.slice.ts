import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginAccordionType = 'login' | 'register' | 'forgotPass'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    loginAccordion: 'login' as LoginAccordionType,
  },
  reducers: {
    setLoginAccordionAC: (
      state,
      action: PayloadAction<{ value: LoginAccordionType }>
    ) => {
      state.loginAccordion = action.payload.value
    },
  },
})
export const { setLoginAccordionAC } = appSlice.actions
export const appReducer = appSlice.reducer
