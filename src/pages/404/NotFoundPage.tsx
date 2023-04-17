import React from 'react'

import Link from '@mui/material/Link'

import { SectionMui } from '../../components/SectionMui/SectionMui'
import { PATH } from '../pages'

import notFoundPicture from './../../assets/notFoundPicture.svg'
import s from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  return (
    <SectionMui title={'Sorry! We cant’t Find that page!'}>
      <div className={s.wrapper}>
        <Link href={`${PATH.category}all-products`}>Back to Shop</Link>
        <img src={notFoundPicture} alt={'notFoundPicture'} />
      </div>
    </SectionMui>
  )
}
