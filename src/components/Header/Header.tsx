import React, { useState } from 'react'

import AccountCircle from '@mui/icons-material/AccountCircle'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MenuIcon from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'
import DarkModeIcon from '@mui/icons-material/NightlightRound'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import { NavLink } from 'react-router-dom'

import { PATH } from '../../pages/pages'
import { setThemeAppAC } from '../../store/app/app.slice'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'
import { Cart } from '../Cart/Cart'

import { Aside } from './components/Left/Aside'
import { MobileMenu } from './components/Right/MobileMenu'
import { ProfileMenu } from './components/Right/ProfileMenu'
import s from './Header.module.scss'

export const Header = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.app.themeApp)
  const cartItems = useAppSelector((state) => state.cart.items)

  const [isChartOpen, setIsChartOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  const handleMenuClose = () => {
    setIsProfileMenuOpen(false)
  }
  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
  }

  const handleThemeChange = () => {
    dispatch(setThemeAppAC({ value: theme === 'light' ? 'dark' : 'light' }))
  }

  return (
    <header className={s.wrapper}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open aside"
            onClick={() => setIsAsideOpen(true)}
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <NavLink to={PATH.catalog} className={s.logo}>
            NAZAR-SHOP
          </NavLink>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link href={PATH.aboutUs}>About Us</Link>
            <IconButton
              onClick={handleThemeChange}
              size="large"
              aria-label="handleThemeChange"
              color="inherit">
              {theme === 'light' ? <WbSunnyIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton size="large" aria-label="FavoriteIcon" color="inherit">
              <Badge badgeContent={0} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={() => setIsChartOpen(!isChartOpen)}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-haspopup="true"
              onClick={() => setIsProfileMenuOpen(true)}
              color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={() => setIsMobileMenuOpen(true)}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        handleClose={handleMobileMenuClose}
      />
      <ProfileMenu isOpen={isProfileMenuOpen} handleClose={handleMenuClose} />
      <Cart isOpen={isChartOpen} handleClose={() => setIsChartOpen(false)} />
      <Aside isOpen={isAsideOpen} handleClose={() => setIsAsideOpen(false)} />
    </header>
  )
}
