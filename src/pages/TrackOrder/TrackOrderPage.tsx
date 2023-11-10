import React from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'

import deliveryImg from '../../assets/delivery.png'
import { SectionMui } from '../../components/SectionMui/SectionMui'

import s from './TrackOrderPage.module.scss'

export const TrackOrderPage = () => {
  return (
    <SectionMui title={'Track Order'}>
      <Container>
        <h2>Track Your Order</h2>
        <p>Enter your order taracking number and your secreet id.</p>
        <div className={s.wrapper}>
          <form>
            <label htmlFor="orderNumber">Order Tracking Number*</label>
            <TextField id={'orderNumber'} placeholder={'Order Number'} />

            <label htmlFor="deliveryDate">Delivery Date</label>
            <TextField
              id={'deliveryDate'}
              placeholder={'Delivery Date'}
              type={'date'}
            />
            <Button>Truck Now</Button>
          </form>
          <div className={s.deliveryImgBox}>
            <img src={deliveryImg} alt="deliveryImg" />
          </div>
        </div>
      </Container>
    </SectionMui>
  )
}
