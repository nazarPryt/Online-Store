import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'

import { resetCartAC } from '../../store/cart/cart.slice'
import { handlePaymentTC } from '../../store/cart/cart.thunk'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

import s from './Cart.module.scss'
import { CartProductItem } from './components/CartProductItem'

export const Cart = (props: { isOpen: boolean; handleClose: () => void }) => {
  const products = useAppSelector((state) => state.cart.items)
  const userID = useAppSelector((state) => state.auth.user.id)
  const dispatch = useAppDispatch()

  const totalPrice = () => {
    let total = 0

    products.forEach((item) => {
      total += item.quantity * item.price
    })

    return total.toFixed(2)
  }
  const handleResetChart = () => {
    dispatch(resetCartAC())
  }
  const handlePayment = () => {
    dispatch(handlePaymentTC({ products, userID }))
  }

  return (
    <Drawer anchor={'right'} open={props.isOpen} onClose={props.handleClose}>
      <Box className={s.cart}>
        <h1>Products in your cart</h1>
        {!products.length && (
          <h2 className={s.emptyText}>Your cart is empty</h2>
        )}
        {products.map((product) => (
          <CartProductItem
            key={product._id}
            price={product.price}
            title={product.title}
            id={product._id}
            quantity={product.quantity}
            description={product.description}
            cover={product.cover}
          />
        ))}
        <div className={s.total}>
          <span>SUBTOTAL</span>
          <span>${totalPrice()}</span>
        </div>
        <Button
          disabled={!products.length}
          variant={'contained'}
          onClick={handlePayment}>
          Pay
        </Button>
        <span className={s.reset} onClick={handleResetChart}>
          Remove All
        </span>
      </Box>
    </Drawer>
  )
}
