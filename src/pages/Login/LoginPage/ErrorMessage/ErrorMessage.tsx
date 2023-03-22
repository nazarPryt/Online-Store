import React from 'react'

import s from './ErrorMessage.module.scss'
type Props = {
  text: string
}
export const ErrorMessage = (props: Props) => {
  return <p className={s.error}>{props.text}</p>
}
