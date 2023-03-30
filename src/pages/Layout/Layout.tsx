import React from 'react'

import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'

import s from './Layout.module.scss'

export const LayoutMui = styled('main')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}))

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <LayoutMui className={s.outlet}>
        <Outlet />
      </LayoutMui>
      <Footer />
    </div>
  )
}
