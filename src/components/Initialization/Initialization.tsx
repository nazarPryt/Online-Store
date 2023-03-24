import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import s from './Initialization.module.scss'

export const Initialization = () => {
  return (
    <div className={s.wrapper}>
      <CircularProgress size={150} />
    </div>
  )
}
