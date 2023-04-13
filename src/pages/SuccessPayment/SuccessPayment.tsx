import React from 'react'

import Link from '@mui/material/Link'

import { SectionMui } from '../../components/SectionMui/SectionMui'
import { PATH } from '../pages'

import successPaymentImg from './../../assets/successPaymentImg.png'
import s from './SuccessPayment.module.scss'

export const SuccessPayment = () => {
  return (
    <SectionMui>
      <div className={s.wrapper}>
        <img src={successPaymentImg} alt="successPaymentImg" />
        <h1>Success order</h1>
        <p>
          Your order is confirmed. You will receive an order confirmation email
          shortly with the expected delivery date for you items
        </p>
        <div>
          <Link
            bgcolor={(theme) => theme.palette.background.paper}
            href={PATH.catalog}>
            Continue Shopping
          </Link>
          <Link href={PATH.myOrders}>View Order</Link>
        </div>
      </div>
    </SectionMui>
  )
}
