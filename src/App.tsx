import React from 'react'

import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import { Initialization } from './components/Initialization/Initialization'
import { Pages } from './pages/pages'
import { useAppDispatch, useAppSelector } from './utils/hooks/redux-hooks'
import { getDesignTokens } from './utils/Theme/ThemeApp'

function App() {
  const isInitialized = useAppSelector((state) => state.auth.isInitialized)
  const themeApp = useAppSelector((state) => state.app.themeApp)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(initializeAppTC())
  // }, [])

  const theme = createTheme(getDesignTokens(themeApp))

  return (
    <>
      <ThemeProvider theme={theme}>
        <Pages />
        {/*<Initialization isInitialization={isInitialized} />*/}
      </ThemeProvider>
    </>
  )
}

export default App
