import React from 'react'

import AutorenewIcon from '@mui/icons-material/Autorenew'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import SecurityIcon from '@mui/icons-material/Security'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'

import s from './WellToKnow.module.scss'
export const WellToKnow = () => {
  return (
    <section className={s.wrapper}>
      <div>
        <div>
          <ShoppingCartCheckoutIcon sx={{ fontSize: 40 }} />
          <div>
            <h4>FREE SHIPPING</h4>
            <p>When ordering over $100</p>
          </div>
        </div>

        <div>
          <AutorenewIcon sx={{ fontSize: 40 }} />
          <div>
            <h4>FREE RETURN</h4>
            <p>Get Return within 30 days</p>
          </div>
        </div>

        <div>
          <SecurityIcon sx={{ fontSize: 40 }} />
          <div>
            <h4>SECURE PAYMENT</h4>
            <p>100% Secure Online Payment</p>
          </div>
        </div>

        <div>
          <EmojiEventsIcon sx={{ fontSize: 40 }} />
          <div>
            <h4>BEST QUALITY</h4>
            <p>Original Product Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
