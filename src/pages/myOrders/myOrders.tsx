import React, { useEffect } from 'react'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { SectionMui } from '../../components/SectionMui/SectionMui'
import { getAllOrdersTC } from '../../store/orders/order.thunk'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

import s from './myOrders.module.scss'
import { Order } from './Order/Order'

export const MyOrders = () => {
  const dispatch = useAppDispatch()
  const orders = useAppSelector((state) => state.orders.items)

  useEffect(() => {
    dispatch(getAllOrdersTC())
  }, [])

  return (
    <SectionMui title={'My Orders'}>
      {!orders.length && (
        <h2 className={s.emptyText}>You didnt make eny order yet</h2>
      )}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Stripe ID</TableCell>
              <TableCell align="right">Purchase on</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <Order
                key={order.stripeId}
                stripeId={order.stripeId}
                products={order.products}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SectionMui>
  )
}
