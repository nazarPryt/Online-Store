import { SubmitHandler, useForm } from 'react-hook-form'

import { RegistrationTC } from '../../../../store/auth/auth.thunks'
import { useAppDispatch } from '../../../../utils/hooks/redux-hooks'
import s from '../LoginPage.module.scss'

type Inputs = {
  email: string
  password: string
  confirmPassword: string
}
export const RegisterForm = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    dispatch(RegistrationTC(data))

  return (
    <form className={s.formWrap} onSubmit={handleSubmit(onSubmit)}>
      <h3>Register Here</h3>
      <input
        {...register('email', {
          required: true,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
        type={'email'}
        placeholder="&#xf2bd;   Email"
      />
      <input
        {...register('password', { required: true, minLength: 3 })}
        type={'password'}
        placeholder="&#xf084;   Password"
      />
      <input
        {...register('confirmPassword', {
          required: true,
          minLength: 3,
          validate: (val: string) => {
            if (watch('password') !== val) {
              return 'Your passwords do no match'
            }
          },
        })}
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
