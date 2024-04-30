import { SubmitHandler, useForm } from 'react-hook-form'

import s from '../LoginPage.module.scss'

type Inputs = {
  email: string
}
export const ForgotPassForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert(JSON.stringify(data, null, 2))

  return (
    <form className={s.formWrap} onSubmit={handleSubmit(onSubmit)}>
      <h3>Reset Password</h3>

      <p>
        Enter your email address below and we will send you an email with
        instructions.
      </p>
      <p>
        <strong>Need Help?</strong> Learn more about how to
        <a href="#"> retrieve an existing account.</a>
      </p>

      <input
        {...register('email', { required: true })}
        type={'email'}
        placeholder="&#xF199;   Email"
      />
      <button
        className={s.buttonSubmit}
        type="submit"
        disabled={!isDirty || !isValid}>
        Reset
      </button>
    </form>
  )
}
