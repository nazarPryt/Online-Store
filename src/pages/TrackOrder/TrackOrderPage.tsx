import React from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'

import { SectionMui } from '../../components/SectionMui/SectionMui'

import s from './TrackOrderPage.module.scss'

export const TrackOrderPage = () => {
  return (
    <SectionMui title={'Track Order'}>
      <Container>
        <h2>Track Your Order</h2>
        <p>Enter your order taracking number and your secreet id.</p>
        <div>
          <form>
            <label htmlFor="orderNumber" />
            <TextField id={'orderNumber'} placeholder={'Order Number'} />

            <label htmlFor="deliveryDate" />
            <TextField id={'deliveryDate'} placeholder={'Delivery Date'} />
            <Button>Truck Now</Button>
          </form>
        </div>
      </Container>
    </SectionMui>
  )
}
