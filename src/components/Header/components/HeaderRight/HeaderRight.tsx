import React from 'react'

import { Favorite, Person, ShoppingCart } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import { NavLink } from 'react-router-dom'

import { PATH } from '../../../../pages/pages'
import s from '../../Header.module.scss'

export const HeaderRight = () => {
  return (
    <div className={s.right}>
      <NavLink to={PATH.catalog}>About us</NavLink>
      <NavLink to={PATH.catalog}>Contact</NavLink>
      <NavLink to={PATH.catalog}>Service</NavLink>
      <IconButton aria-label="delete">
        <Favorite color={'warning'} />
      </IconButton>
      <IconButton aria-label="delete">
        <ShoppingCart color={'warning'} />
      </IconButton>
      <IconButton aria-label="delete">
        <Person color={'warning'} />
      </IconButton>
    </div>
  )
}
