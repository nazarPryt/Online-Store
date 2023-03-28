import React from 'react'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export const ProfileMenu = (props: {
  isOpen: boolean
  handleClose: () => void
}) => {
  return (
    <Menu
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={props.isOpen}
      onClose={props.handleClose}>
      <MenuItem onClick={props.handleClose}>Profile</MenuItem>
      <MenuItem onClick={props.handleClose}>My account</MenuItem>
      <MenuItem onClick={props.handleClose}>LogOut</MenuItem>
    </Menu>
  )
}
