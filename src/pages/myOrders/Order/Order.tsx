import React, { useState } from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

import { OrderDomainType } from '../../../store/orders/OrderTypes'

import s from './Order.module.scss'

export const Order = (props: OrderDomainType) => {
  const [open, setOpen] = useState(false)

  const totalPrice = () => {
    let amount = 0

    props.products.forEach((prod) => {
      amount = amount + prod.price * prod.quantity
    })

    return amount
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {props.stripeId}
        </TableCell>
        <TableCell component="th" scope="row" align={'center'}>
          {new Date(props.createdAt).toLocaleString()}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Products
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Cover</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="right">SubTotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell component="th" scope="row">
                        <div className={s.productImg}>
                          <img src={product.cover} alt="product img" />
                        </div>
                      </TableCell>
                      <TableCell>{product.title}</TableCell>
                      <TableCell align="center">{product.quantity}</TableCell>
                      <TableCell align="center">$ {product.price}</TableCell>
                      <TableCell align="right">
                        $
                        {Math.round(product.quantity * product.price * 100) /
                          100}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell align="right">
                      <Typography variant="h5" component="div">
                        Total price
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="h4" component="div">
                        $ {totalPrice()}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
