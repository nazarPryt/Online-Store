import React, { useEffect } from 'react'

import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import { Initialization } from './components/Initialization/Initialization'
import { Pages } from './pages/pages'
import { ACCESS_TOKEN } from './services/instance'
import { CheckAuthTC } from './store/auth/auth.thunks'
import { useAppDispatch, useAppSelector } from './utils/hooks/redux-hooks'
import { getDesignTokens } from './utils/Theme/ThemeApp'

function App() {
  const isInitialized = useAppSelector((state) => state.auth.isInitialized)
  const themeApp = useAppSelector((state) => state.app.themeApp)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN)

    if (token) {
      dispatch(CheckAuthTC())
    }
  }, [])

  const theme = createTheme(getDesignTokens(themeApp))

  return (
    <>
      <ThemeProvider theme={theme}>
        <Pages />
        <Initialization isInitialization={isInitialized} />
      </ThemeProvider>
    </>
  )
}

export default App
