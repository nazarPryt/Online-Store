import { MouseEvent, useState } from 'react'

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
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { useNavigate } from 'react-router-dom'

import { PATH } from '../../pages/pages'
import { setThemeAppAC } from '../../store/app/app.slice'
import { logOutTC } from '../../store/auth/auth.thunks'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'
import { Cart } from '../Cart/Cart'

import { Aside } from './components/Left/Aside'

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const cartItems = useAppSelector((state) => state.cart.items)
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  const wishlistItems = useAppSelector((state) => state.wishlist.items)
  const theme = useAppSelector((state) => state.app.themeApp)

  const [isChartOpen, setIsChartOpen] = useState(false)
  const [isAsideOpen, setIsAsideOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }
  const handleThemeChange = () => {
    dispatch(setThemeAppAC({ value: theme === 'light' ? 'dark' : 'light' }))
  }
  const handleLogOut = () => {
    dispatch(logOutTC())
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={() => navigate(PATH.user)}>Profile</MenuItem>
      <MenuItem onClick={() => navigate(PATH.myOrders)}>My Orders</MenuItem>
      <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem onClick={handleThemeChange}>
        <IconButton size="large" aria-label="handleThemeChange" color="inherit">
          {theme === 'light' ? <WbSunnyIcon /> : <DarkModeIcon />}
        </IconButton>
        <p>Theme</p>
      </MenuItem>
      <MenuItem onClick={() => navigate(PATH.wishlist)}>
        <IconButton size="large" aria-label="FavoriteIcon" color="inherit">
          <Badge badgeContent={wishlistItems.length} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Favorite</p>
      </MenuItem>
      <MenuItem onClick={() => setIsChartOpen(!isChartOpen)}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit">
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>My Chart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setIsAsideOpen(true)}
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>

            <Link
              href={PATH.category}
              variant="h6"
              noWrap
              sx={{ display: { xs: 'none', sm: 'block' } }}>
              MediaWorld
            </Link>
            {/*<Search>*/}
            {/*  <SearchIconWrapper>*/}
            {/*    <SearchIcon />*/}
            {/*  </SearchIconWrapper>*/}
            {/*  <StyledInputBase*/}
            {/*    placeholder="Search…"*/}
            {/*    inputProps={{ 'aria-label': 'search' }}*/}
            {/*  />*/}
            {/*</Search>*/}

            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                  alignItems: 'center',
                },
              }}>
              <IconButton
                onClick={handleThemeChange}
                size="large"
                aria-label="handleThemeChange"
                color="inherit">
                {theme === 'light' ? <WbSunnyIcon /> : <DarkModeIcon />}
              </IconButton>
              {isLoggedIn ? (
                <>
                  <IconButton
                    size="large"
                    aria-label="FavoriteIcon"
                    color="inherit"
                    onClick={() => navigate(PATH.wishlist)}>
                    <Badge badgeContent={wishlistItems.length} color="error">
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
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit">
                    <AccountCircle />
                  </IconButton>
                </>
              ) : (
                <Link href={PATH.login}>LogIn</Link>
              )}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Cart isOpen={isChartOpen} handleClose={() => setIsChartOpen(false)} />
      <Aside isOpen={isAsideOpen} handleClose={() => setIsAsideOpen(false)} />
    </Box>
  )
}
