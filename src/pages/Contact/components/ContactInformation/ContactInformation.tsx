import React from 'react'

import PhoneForwardedRoundedIcon from '@mui/icons-material/PhoneForwardedRounded'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

import s from './ContactInformation.module.scss'
export const ContactInformation = () => {
  return (
    <address className={s.wrapper}>
      <div>
        <h2>Contact Information</h2>
        <p>
          Fill the form below or write us .We will help you as soon as possible.
        </p>
      </div>
      <div className={s.inner}>
        <Box
          bgcolor={(theme) => theme.palette.secondary.contrastText}
          className={s.item}>
          <PhoneForwardedRoundedIcon />
          <h3>Phone</h3>
          <Link href="tel:+32398473847383">+(323) 9847 3847 383</Link>
          <Link href="tel:+43454665467443">+(434) 5466 5467 443</Link>
        </Box>
        <Box
          bgcolor={(theme) => theme.palette.secondary.contrastText}
          className={s.item}>
          <PhoneForwardedRoundedIcon />
          <h3>Email</h3>
          <Link href="mailto:Demoemail@gmail.com">Demoemail@gmail.com</Link>
          <Link href="mailto:itstore@gmail.com">itstore@gmail.com</Link>
        </Box>
        <Box
          className={s.addressBox}
          bgcolor={(theme) => theme.palette.secondary.contrastText}>
          <div>
            <RoomOutlinedIcon />
            <span>
              <h3>Address</h3>
              <p>4517 Washington Ave. Manchester, Road 2342, Kentucky 39495</p>
            </span>
          </div>
          <div>
            <iframe
              title={'map'}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d774382.6761693481!2d-73.979681!3d40.69748800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1681319296529!5m2!1sen!2sbd"
              className={s.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Box>
      </div>
    </address>
  )
}
