import React, { useEffect } from 'react'

import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { Initialization } from './components/Initialization/Initialization'
import { Pages } from './pages/pages'
import { CheckAuthTC } from './store/auth/auth.thunks'
import { useAppDispatch, useAppSelector } from './utils/hooks/redux-hooks'
import { getDesignTokens } from './utils/Theme/ThemeApp'

function App() {
  const isInitialized = useAppSelector((state) => state.auth.isInitialized)
  const themeApp = useAppSelector((state) => state.app.themeApp)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(CheckAuthTC())
  }, [])

  const theme = createTheme(getDesignTokens(themeApp))

  return (
    <ThemeProvider theme={theme}>
      <Pages />
      <Initialization isInitialization={isInitialized} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  )
}

export default App
