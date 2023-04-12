import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { string } from 'yup'

import s from './GetInTouch.module.scss'

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: string().email('Invalid email format').required('Mail is required'),
    subject: string().required(),
    message: string().min(10).required(),
  })
  .required()

type FormData = yup.InferType<typeof schema>

export const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) =>
    alert(JSON.stringify(data, null, 2))

  return (
    <div className={s.wrapper}>
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder={'First Name*'}
          style={{ width: '80%' }}
          label={'First Name'}
          {...register('firstName', { required: true })}
        />
        <p>{errors.firstName?.message}</p>
        <TextField
          label={'Email Address'}
          placeholder={'Email Address*'}
          type={'email'}
          style={{ width: '80%' }}
          {...register('email', { required: true })}
        />
        <p>{errors.email?.message}</p>
        <TextField
          placeholder={'Subject*'}
          style={{ width: '80%' }}
          label={'Subject'}
          {...register('subject', { required: true })}
        />
        <p>{errors.subject?.message}</p>
        <TextField
          placeholder={'Message*'}
          label={'Message'}
          multiline
          maxRows={6}
          style={{ width: '80%' }}
          {...register('message', { required: true })}
        />
        <p>{errors.message?.message}</p>
        <Button type="submit" variant={'contained'}>
          Send Now
        </Button>
      </form>
    </div>
  )
}
