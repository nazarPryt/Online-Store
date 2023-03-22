import React, { useState } from 'react'

import s from 'Login'
const LogIn = () => {
  type accordionType = 'login' | 'register' | 'forgotPass'

  const [accordion, setAccordion] = useState<accordionType>('login')

  return (
    <section className={s.wrapper}>
      <picture>
        <source media="(min-width:650px)" srcSet={loginBg} />
        <source media="(min-width:465px)" srcSet={loginBg} />
        <img src={loginBg} alt="Flowers" />
      </picture>
      <h1>login page</h1>
      <div className={s.container}>
        <div className={s.innerWrap}>
          <div className={s.left}>
            <div
              className={`${s.buttonTab} ${
                accordion === 'login' ? s.buttonActive : ''
              }`}
              onClick={() => setAccordion('login')}>
              <FontAwesomeIcon icon={faUser} className={s.iconTab} />
              <span>login</span>
            </div>
            <div
              className={`${s.buttonTab} ${
                accordion === 'register' ? s.buttonActive : ''
              }`}
              onClick={() => setAccordion('register')}>
              <FontAwesomeIcon icon={faUser} className={s.iconTab} />
              <span>Register</span>
            </div>
            <div
              className={`${s.buttonTab} ${
                accordion === 'forgotPass' ? s.buttonActive : ''
              }`}
              onClick={() => setAccordion('forgotPass')}>
              <FontAwesomeIcon icon={faUser} className={s.iconTab} />
              <span>Forgot Password?</span>
            </div>
          </div>

          <div className={s.right}>
            {accordion === 'login' && (
              <form className={s.formWrap}>
                <h3>Login Here</h3>
                <SuperInputText type={'email'} placeholder="&#xF199;   Email" />
                <SuperInputText
                  type={'password'}
                  placeholder="&#xf084;   Password"
                />
                <button className={s.buttonSubmit}>Login</button>
                <button onClick={() => setAccordion('forgotPass')}>
                  Forgot Password?
                </button>
              </form>
            )}
            {accordion === 'register' && (
              <form className={s.formWrap}>
                <h3>Register Here</h3>
                <SuperInputText
                  type={'text'}
                  placeholder="&#xf2bd;   Username"
                />
                <SuperInputText
                  type={'password'}
                  placeholder="&#xf084;   Password"
                />
                <SuperInputText
                  type={'password'}
                  placeholder="&#xf084;   Confirm Password"
                />
                <button className={s.buttonSubmit}>Register</button>
              </form>
            )}
            {accordion === 'forgotPass' && (
              <form className={s.formWrap}>
                <h3>Reset Password</h3>
                <p>
                  Enter your email address below and we will send you an email
                  with instructions.
                </p>
                <p>
                  <strong>Need Help?</strong> Learn more about how to
                  <a href="#"> retrieve an existing account.</a>
                </p>
                <SuperInputText type={'email'} placeholder="&#xF199;   Email" />
                <button className={s.buttonSubmit}>Reset</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogIn
