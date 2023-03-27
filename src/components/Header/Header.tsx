import React from 'react'

import { Link } from 'react-router-dom'

import { PATH } from '../../pages/pages'

import { HeaderLeft } from './components/HeaderLeft/HeaderLeft'
import { HeaderRight } from './components/HeaderRight/HeaderRight'
import s from './Header.module.scss'

export const Header = () => {
  return (
    <nav className={s.wrapper}>
      <div className={'container'}>
        <div className={s.inner}>
          <HeaderLeft />
          <div className={s.center}>
            <Link to={PATH.catalog}>NAZAR STORE</Link>
          </div>
          <HeaderRight />
        </div>
      </div>
    </nav>
  )
}
