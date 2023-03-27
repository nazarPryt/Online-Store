import React, { useEffect } from 'react'

import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import { Initialization } from './components/Initialization/Initialization'
import { Pages } from './pages/pages'
import { initializeAppTC } from './store/auth/auth.thunks'
import { useAppDispatch, useAppSelector } from './utils/hooks/redux-hooks'
import { getDesignTokens } from './utils/Theme/ThemeApp'

function App() {
  const isInitialized = useAppSelector((state) => state.auth.isInitialized)
  const themeApp = useAppSelector((state) => state.app.themeApp)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  if (!isInitialized) {
    return <Initialization />
  }
  // const [mode, setMode] = useState<PaletteMode>('dark')
  // const colorMode = useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode: PaletteMode) =>
  //         prevMode === 'light' ? 'dark' : 'light'
  //       )
  //     },
  //   }),
  //   []
  // )
  // Update the theme only if the mode changes
  const theme = createTheme(getDesignTokens(themeApp))

  console.log('render')

  return (
    <>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </>
  )
}

export default App
