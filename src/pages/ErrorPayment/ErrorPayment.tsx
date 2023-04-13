import React from 'react'

import Link from '@mui/material/Link'

import { SectionMui } from '../../components/SectionMui/SectionMui'
import { PATH } from '../pages'

import ErrorPaymentIcon from './../../assets/ErrorPaymentIcon.png'
import s from './ErrorPayment.module.scss'
export const ErrorPayment = () => {
  return (
    <SectionMui>
      <div className={s.wrapper}>
        <img src={ErrorPaymentIcon} alt="ErrorPaymentIcon" />
        <h1>Something went wrong</h1>
        <Link href={PATH.catalog}>Back to products</Link>
      </div>
    </SectionMui>
  )
}
