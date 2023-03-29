import React from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import discountBanner from './../../assets/discount-banner-1.jpg'
import s from './DiscountSection.module.scss'

export const DiscountSection = () => {
  return (
    <section className={s.wrapper}>
      <img src={discountBanner} alt="discountBanner" />
      <div className={s.inner}>
        <h1>
          Get <span>20%</span> Off Discount Coupon
        </h1>
        <p>by Subscribe our Newsletter</p>
        <div>
          <TextField
            type={'email'}
            variant={'filled'}
            placeholder={'Email Address'}
          />
          <Button color={'secondary'} variant={'contained'}>
            Get the Coupon
          </Button>
        </div>
      </div>
    </section>
  )
}
