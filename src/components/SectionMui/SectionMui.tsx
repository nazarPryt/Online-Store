import React, { ReactNode } from 'react'

import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import s from './SectionMui.module.scss'

const SectionMuiWrapper = styled('section')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}))

export const SectionMui = (props: { title?: string; children: ReactNode }) => {
  return (
    <SectionMuiWrapper>
      {props.title && (
        <Typography className={s.typography} variant={'h1'} align={'center'}>
          {props.title}
        </Typography>
      )}
      {props.children}
    </SectionMuiWrapper>
  )
}
//TODO implement in all other components
