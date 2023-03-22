import React from 'react'

import {
  faKey,
  faPersonRunning,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  LoginAccordionType,
  setLoginAccordionAC,
} from '../../../../store/app/app.slice'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../utils/hooks/redux-hooks'
import s from '../LoginPage.module.scss'

export const LoginAccordion = () => {
  const accordion = useAppSelector((state) => state.app.loginAccordion)
  const dispatch = useAppDispatch()

  const setAccordionHandler = (value: LoginAccordionType) => {
    dispatch(setLoginAccordionAC({ value }))
  }

  return (
    <div className={s.left}>
      <div
        className={`${s.buttonTab} ${
          accordion === 'login' ? s.buttonActive : ''
        }`}
        onClick={() => setAccordionHandler('login')}>
        <FontAwesomeIcon icon={faUser} className={s.iconTab} />
        <span>login</span>
      </div>
      <div
        className={`${s.buttonTab} ${
          accordion === 'register' ? s.buttonActive : ''
        }`}
        onClick={() => setAccordionHandler('register')}>
        <FontAwesomeIcon icon={faKey} className={s.iconTab} />
        <span>Register</span>
      </div>
      <div
        className={`${s.buttonTab} ${
          accordion === 'forgotPass' ? s.buttonActive : ''
        }`}
        onClick={() => setAccordionHandler('forgotPass')}>
        <FontAwesomeIcon icon={faPersonRunning} className={s.iconTab} />
        <span>Forgot Password?</span>
      </div>
    </div>
  )
}
