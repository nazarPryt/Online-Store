import React from 'react'

import { Typography } from '@mui/material'
import Container from '@mui/material/Container'

import { SectionMui } from '../../components/SectionMui/SectionMui'

import { ContactInformation } from './components/ContactInformation/ContactInformation'
import { GetInTouch } from './components/GetInTouch/GetInTouch'
import s from './ContactPage.module.scss'

export const ContactPage = () => {
  return (
    <SectionMui title={'Contact'}>
      <Container>
        <div className={s.inner}>
          <ContactInformation />
          <GetInTouch />
        </div>
      </Container>
    </SectionMui>
  )
}
