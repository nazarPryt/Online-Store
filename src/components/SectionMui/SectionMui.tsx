import React, { ReactNode } from 'react'

import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Wrapper = styled('section')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}))

export const SectionMui = (props: { title?: string; children: ReactNode }) => {
  return (
    <Wrapper>
      {props.title && (
        <Typography
          align={'center'}
          variant={'h4'}
          style={{ margin: '20px 0' }}>
          {props.title}
        </Typography>
      )}
      {props.children}
    </Wrapper>
  )
}
//TODO implement in all other components
