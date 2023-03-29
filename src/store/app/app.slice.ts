import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GenerateId } from '../../utils/handlers/generateId'

type AppStatusType = 'idle' | 'load' | 'success' | 'error'
export type LoginAccordionType = 'login' | 'register' | 'forgotPass'
export type ThemeAppType = 'light' | 'dark'

export type NotificationType = {
  message: string
  type: 'success' | 'error'
  id: string
}
const initialState = {
  loginAccordion: 'login' as LoginAccordionType,
  themeApp: 'light' as ThemeAppType,
  status: 'idle' as AppStatusType,
  notifications: [] as NotificationType[],
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
    setAppStatusAC: (
      state,
      action: PayloadAction<{ status: AppStatusType }>
    ) => {
      state.status = action.payload.status
    },
    SetAppNotificationAC: (
      state,
      action: PayloadAction<{ notifications: Omit<NotificationType, 'id'> }>
    ) => {
      const id = GenerateId()

      state.notifications.push({ ...action.payload.notifications, id })
    },
    RemoveAppNotificationAC: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.notifications.findIndex(
        (index) => index.id === action.payload.id
      )

      if (index > -1) {
        state.notifications.splice(index, 1)
      }
    },
  },
})
export const {
  setLoginAccordionAC,
  setThemeAppAC,
  setAppStatusAC,
  RemoveAppNotificationAC,
  SetAppNotificationAC,
} = appSlice.actions
export const appReducer = appSlice.reducer
