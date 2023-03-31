import React from 'react'

import PhoneForwardedRoundedIcon from '@mui/icons-material/PhoneForwardedRounded'
import Link from '@mui/material/Link'

import s from './ContactInformation.module.scss'
export const ContactInformation = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <h5>Contact Information</h5>
        <p>
          Fill the form below or write us .We will help you as soon as possible.
        </p>
      </div>
      <div>
        <div>
          <PhoneForwardedRoundedIcon />
          <h3>Phone</h3>
          <Link href="tel:+32398473847383">+(323) 9847 3847 383</Link>
          <Link href="tel:+43454665467443">+(434) 5466 5467 443</Link>
        </div>
        <div>
          <PhoneForwardedRoundedIcon />
          <h3>Email</h3>
          <Link href="tel:+32398473847383">+(323) 9847 3847 383</Link>
          <Link href="tel:+43454665467443">+(434) 5466 5467 443</Link>
        </div>
      </div>
    </div>
  )
}
