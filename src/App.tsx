import React, { useEffect } from 'react'

import { Initialization } from './components/Initialization/Initialization'
import { Pages } from './pages/pages'
import { initializeAppTC } from './store/auth/auth.thunks'
import { useAppDispatch, useAppSelector } from './utils/hooks/redux-hooks'

function App() {
  const isInitialized = useAppSelector((state) => state.auth.isInitialized)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  if (!isInitialized) {
    return <Initialization />
  }

  return (
    <>
      <Pages />
    </>
  )
}

export default App
