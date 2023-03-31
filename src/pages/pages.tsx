import React from 'react'

import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { useAppSelector } from '../utils/hooks/redux-hooks'

import { NotFoundPage } from './404/NotFoundPage'
import { AboutUs } from './AboutUs/AboutUs'
import { CatalogPage } from './Catalog/CatalogPage'
import { ContactPage } from './Contact/ContactPage'
import { Layout } from './Layout/Layout'
import { LoginPage } from './Login/LoginPage/LoginPage'
import { SingleProductPage } from './SingleProductPage/SingleProductPage'
import { UserPage } from './User/UserPage'
import { Wishlist } from './Wishlist/Wishlist'

export const PATH = {
  login: '/login',
  user: '/user',
  aboutUs: '/about',
  wishlist: '/wishlist',
  contact: '/contact',
  catalog: '/catalog/:id',
  product: '/product/:id',
}

export const Pages = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  const RequireAuth = () => {
    if (!isLoggedIn) return <Navigate to={PATH.login} replace />

    return <Outlet />
  }

  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path={PATH.user} element={<UserPage />} />
      </Route>
      <Route element={<Layout />}>
        <Route path={PATH.catalog} element={<CatalogPage />} />
        <Route path={PATH.product} element={<SingleProductPage />} />
        <Route path={PATH.aboutUs} element={<AboutUs />} />
        <Route path={PATH.contact} element={<ContactPage />} />
        <Route path={PATH.wishlist} element={<Wishlist />} />
      </Route>
      <Route path={PATH.login} element={<LoginPage />} />
      <Route path={'/'} element={<Navigate to={PATH.catalog} />} />
      <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
  )
}
