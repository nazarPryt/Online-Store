import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { setLoginAccordionAC } from '../../../../store/app/app.slice'
import { logInTC } from '../../../../store/auth/auth.actions'
import { useAppDispatch } from '../../../../utils/hooks/redux-hooks'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import s from '../LoginPage.module.scss'

const defaultValues = {
  identifier: '' as string,
  password: '' as string,
}

export const LoginForm = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isDirty, isValid },
  } = useForm<typeof defaultValues>({
    defaultValues,
  })
  const onSubmit: SubmitHandler<typeof defaultValues> = (data) => {
    dispatch(logInTC(data))
  }

  const handleSetAccordion = () => {
    dispatch(setLoginAccordionAC({ value: 'forgotPass' }))
  }

  return (
    <form className={s.formWrap} onSubmit={handleSubmit(onSubmit)}>
      <h3>Login Here</h3>
      <div>
        <input
          {...register('identifier', {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          type={'email'}
          placeholder="&#xF199;   Email"
        />
        {errors.identifier && <ErrorMessage text={'Email is not valid'} />}
        {/*{isDirty ||*/}
        {/*  (touchedFields.email && <ErrorMessage text={'Email is required!'} />)}*/}
      </div>

      <input
        {...register('password', { required: true, minLength: 3 })}
        type={'password'}
        placeholder="&#xf084;   Password"
      />
      {errors.password?.type && (
        <ErrorMessage text={'Password must be 3 characters or more'} />
      )}
      {isDirty ||
        (touchedFields.password && (
          <ErrorMessage text={'Password is required!'} />
        ))}

      <button
        className={s.buttonSubmit}
        type="submit"
        disabled={!isDirty || !isValid}>
        Login
      </button>
      <button onClick={handleSetAccordion} type={'button'}>
        Forgot Password?
      </button>
    </form>
  )
}
