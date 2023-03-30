import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import { CustomersFeedback } from '../../components/CustomersFeedback/CustomersFeedback'

import aboutUsPhoto from './../../assets/aboutUsPhoto.webp'
import s from './AboutUs.module.scss'
import { AboutUsMui } from './components/AboutUsMui'
import { LatestNews } from './components/LatestNews/LatestNews'
import { WellToKnow } from './components/WellToKnow/WellToKnow'

export const AboutUs = () => {
  return (
    <AboutUsMui className={s.wrapper}>
      <Container>
        <h1>About Us</h1>
        <Box className={s.inner}>
          <div>
            <img src={aboutUsPhoto} alt="aboutUsPhoto" />
          </div>
          <div>
            <h3>What is e-commerce business?</h3>
            <p>
              We are [SHOP NAME], a small but motivated company specializing in
              [PRODUCTS CATEGORY NAME]. We believe passionately in great
              bargains and excellent service, which is why we commit ourselves
              to giving you the best of both. If you’re looking for something
              new, you’re in the right place. We strive to be industrious and
              innovative, offering our customers something they want, putting
              their desires at the top of our priority list.
            </p>
            <ul>
              <li>
                We showcase a brands personality and offer more information than
                just a physical store
              </li>
              <li>We may help with conversion rates</li>
              <li>
                Creates a digital catalogue for shoppers who are looking for
                goods online and stores that dont have an online presence or
                perhaps only have it on social media channels, like Instagram.
              </li>
              <li>
                With more ways of marketing to consumers all day long, brands
                must research how cross-channel selling can be used as an
                advantage.
              </li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
            <Button variant={'contained'}>Contact Us</Button>
          </div>
        </Box>
        <CustomersFeedback />
        <WellToKnow />
        <LatestNews />
      </Container>
    </AboutUsMui>
  )
}
