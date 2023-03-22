import React from 'react'

import TextField from '@mui/material/TextField/TextField'
import { SubmitHandler, useForm } from 'react-hook-form'

import s from '../LoginPage.module.scss'

type Inputs = {
  email: string
  password: string
  confirmPassword: string
}
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isDirty, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert(JSON.stringify(data, null, 2))

  return (
    <form className={s.formWrap} onSubmit={handleSubmit(onSubmit)}>
      <h3>Register Here</h3>
      <TextField
        {...register('email', {
          required: true,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
        type={'email'}
        placeholder="&#xf2bd;   Email"
      />

      <TextField
        {...register('password', { required: true, minLength: 3 })}
        type={'password'}
        placeholder="&#xf084;   Password"
      />
      <TextField
        {...register('confirmPassword', { required: true, minLength: 3 })}
        type={'password'}
        placeholder="&#xf084;   Confirm Password"
      />
      <button
        className={s.buttonSubmit}
        disabled={!isDirty || !isValid}
        type="submit">
        Register
      </button>
    </form>
  )
}
