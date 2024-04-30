import React from 'react'

import Drawer from '@mui/material/Drawer'
import { useLocation } from 'react-router-dom'

import { PATH } from '../../../../pages/pages'
import { FilterBar } from '../../../SideBar/FilterBar'

export const Aside = (props: { isOpen: boolean; handleClose: () => void }) => {
  let location = useLocation()

  return (
    <Drawer anchor={'left'} open={props.isOpen} onClose={props.handleClose}>
      {location.pathname === `${PATH.category}` && <FilterBar />}
      {location.pathname === `${PATH.product}` && <div>some text</div>}
    </Drawer>
  )
}
