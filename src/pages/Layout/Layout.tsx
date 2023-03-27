import React from 'react'

import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { SideBar } from '../../components/SideBar/SideBar'

import s from './Layout.module.scss'
export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <SideBar />
      <div className={s.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
