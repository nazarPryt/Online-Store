import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'

import { removeItemAC, resetCartAC } from '../../store/cart/cart.slice'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

import s from './Cart.module.scss'

export const Cart = (props: { isOpen: boolean; handleClose: () => void }) => {
  const cartItems = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()

  const totalPrice = () => {
    let total = 0

    cartItems.forEach((item) => {
      total += item.quantity * item.price
    })

    return total.toFixed(2)
  }

  return (
    <Drawer anchor={'right'} open={props.isOpen} onClose={props.handleClose}>
      <Box className={s.cart}>
        <h1>Products in your cart</h1>
        {!cartItems.length && (
          <h2 className={s.emptyText}>Your cart is empty</h2>
        )}
        {cartItems.map((item) => (
          <div className={s.item} key={item.id}>
            <img src={item.img} alt="productPhoto" />
            <div className={s.details}>
              <h1>{item.title}</h1>
              <p>{item.description.substring(0, 100)}</p>
              <div className={s.price}>
                {item.quantity} x ${item.price}
              </div>
            </div>
            <IconButton
              size={'small'}
              onClick={() => dispatch(removeItemAC({ id: item.id }))}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        <div className={s.total}>
          <span>SUBTOTAL</span>
          <span>${totalPrice()}</span>
        </div>
        <Button disabled={!cartItems.length} variant={'contained'}>
          Pay
        </Button>
        <span className={s.reset} onClick={() => dispatch(resetCartAC())}>
          Remove All
        </span>
      </Box>
    </Drawer>
  )
}
