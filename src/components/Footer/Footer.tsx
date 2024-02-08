import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import paymentGetWays from '../../assets/payment-getways.png'
import { PATH } from '../../pages/pages'
import { DiscountSection } from '../DiscountSection/DiscountSection'

import { FooterMui } from './components/FooterMui'
import s from './Footer.module.scss'
export const Footer = () => {
  return (
    <>
      <DiscountSection />
      <FooterMui className={s.wrapper}>
        <Container>
          <div className={s.footerNav}>
            <div>
              <h5>About Us</h5>
              <p>
                We know there are a lot of threa developers our but we pride
                into a firm in the industry.
              </p>
            </div>
            <div>
              <h5>Feature</h5>
              <Link href={PATH.aboutUs}>About Us</Link>
              <Link target={'_blank'} href={PATH.termsAndCondition}>
                Terms Condition
              </Link>
              <Link>Best Products</Link>
            </div>
            <div>
              <h5>General Links</h5>
              <Link href={'/'}>Blog</Link>
              <Link href={PATH.trackOrder}>Tracking Order</Link>
              <Link href={'/'}>Become Seller</Link>
            </div>
            <div>
              <h5>Helpful</h5>
              <Link href={'/'}>Flash Sale</Link>
              <Link href={'/'}>FAQ</Link>
              <Link href={'/'}>Support</Link>
            </div>
          </div>
          <Box className={s.footerBottom}>
            <Typography>
              ©2023 <b>Nazar Prytuliak</b> All rights reserved
            </Typography>
            <div>
              <img src={paymentGetWays} alt="paymentGetWays" />
            </div>
          </Box>
        </Container>
      </FooterMui>
    </>
  )
}
