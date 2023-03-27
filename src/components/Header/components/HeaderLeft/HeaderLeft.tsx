import React from 'react'

import { NavLink } from 'react-router-dom'

import { PATH } from '../../../../pages/pages'
import s from '../../Header.module.scss'

export const HeaderLeft = () => {
  return (
    <div className={s.left}>
      <button>language</button>
      <button>USD</button>
      <NavLink to={PATH.catalog}>Phones</NavLink>
      <NavLink to={PATH.catalog}>Tablets</NavLink>
      <NavLink to={PATH.catalog}>Accessories</NavLink>
    </div>
  )
}
