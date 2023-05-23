import React from 'react'

import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../../../utils/hooks/redux-hooks'
import { PATH } from '../../pages'

import LoginPageBackGround from './../../../assets/LoginPageBackGround.jpg'
import { ForgotPassForm } from './ForgotPassForm/ForgotPassForm'
import { LoginAccordion } from './LoginAccordion/LoginAccordion'
import { LoginForm } from './LoginForm/LoginForm'
import s from './LoginPage.module.scss'
import { RegisterForm } from './RegisterForm/RegisterForm'

export const LoginPage = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  const accordion = useAppSelector((state) => state.app.loginAccordion)

  if (isLoggedIn) {
    return <Navigate to={PATH.category} replace />
  }

  return (
    <section className={s.wrapper}>
      <picture>
        <source media="(min-width:650px)" srcSet={LoginPageBackGround} />
        <source media="(min-width:465px)" srcSet={LoginPageBackGround} />
        <img src={LoginPageBackGround} alt="bg-picture" />
      </picture>
      <div>
        <h1>login page</h1>
        <div className={s.innerWrap}>
          <LoginAccordion />
          <div className={s.right}>
            {accordion === 'login' && <LoginForm />}
            {accordion === 'register' && <RegisterForm />}
            {accordion === 'forgotPass' && <ForgotPassForm />}
          </div>
        </div>
      </div>
    </section>
  )
}
