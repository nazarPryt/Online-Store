import React from 'react'

import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import s from '../../Wishlist.module.scss'

export const WishlistHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell className={s.tableHeader} align="center">
          Image
        </TableCell>
        <TableCell className={s.tableHeader} align="center">
          Product
        </TableCell>
        <TableCell className={s.tableHeader} align="center">
          Price
        </TableCell>
        <TableCell className={s.tableHeader} align="center">
          Quantity
        </TableCell>
        <TableCell className={s.tableHeader} align="center">
          Total
        </TableCell>
        <TableCell className={s.tableHeader} align="center"></TableCell>
      </TableRow>
    </TableHead>
  )
}
