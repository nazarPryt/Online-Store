import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import s from './Initialization.module.scss'

export const Initialization = (props: { isInitialization: boolean }) => {
  return (
    <div className={props.isInitialization ? s.none : s.wrapper}>
      <CircularProgress size={150} />
    </div>
  )
}
