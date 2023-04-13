import React from 'react'

import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { useAppSelector } from '../utils/hooks/redux-hooks'

import { NotFoundPage } from './404/NotFoundPage'
import { AboutUs } from './AboutUs/AboutUs'
import { CatalogPage } from './Catalog/CatalogPage'
import { ContactPage } from './Contact/ContactPage'
import { ErrorPayment } from './ErrorPayment/ErrorPayment'
import { Layout } from './Layout/Layout'
import { LoginPage } from './Login/LoginPage/LoginPage'
import { MyOrders } from './myOrders/myOrders'
import { SingleProductPage } from './SingleProductPage/SingleProductPage'
import { SuccessPayment } from './SuccessPayment/SuccessPayment'
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
  successPayment: '/successPayment',
  errorPayment: '/errorPayment',
  myOrders: '/myOrders',
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
        <Route path={PATH.wishlist} element={<Wishlist />} />
        <Route path={PATH.catalog} element={<CatalogPage />} />
        <Route path={PATH.product} element={<SingleProductPage />} />
        <Route path={PATH.successPayment} element={<SuccessPayment />} />
        <Route path={PATH.errorPayment} element={<ErrorPayment />} />
        <Route path={PATH.myOrders} element={<MyOrders />} />
        <Route path={PATH.aboutUs} element={<AboutUs />} />
        <Route path={PATH.contact} element={<ContactPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Route>
      <Route path={PATH.login} element={<LoginPage />} />
      <Route path={'/'} element={<Navigate to={PATH.catalog} />} />
    </Routes>
  )
}
