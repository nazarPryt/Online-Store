import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import { loadStripe } from '@stripe/stripe-js'

import imgNotFound from '../../assets/imgNotFound.png'
import { instance } from '../../services/instance'
import { removeItemAC, resetCartAC } from '../../store/cart/cart.slice'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

import s from './Cart.module.scss'

export const Cart = (props: { isOpen: boolean; handleClose: () => void }) => {
  const products = useAppSelector((state) => state.cart.items)
  const dispatch = useAppDispatch()

  const totalPrice = () => {
    let total = 0

    products.forEach((item) => {
      total += item.quantity * item.price
    })

    return total.toFixed(2)
  }

  const handlePayment = async () => {
    const stripePromise = loadStripe(
      'pk_test_51MwTodKDtk8DBuSOn5gl7bCmFRkpQ5rSzE7trWoKjxH78o6w6rCII2AtDNfHnn02OJX5IQf4ry3spdhujEF1JhG100wjP2bmrq'
    )

    try {
      const stripe = await stripePromise
      const res = await instance.post('/api/orders', { products })

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Drawer anchor={'right'} open={props.isOpen} onClose={props.handleClose}>
      <Box className={s.cart}>
        <h1>Products in your cart</h1>
        {!products.length && (
          <h2 className={s.emptyText}>Your cart is empty</h2>
        )}
        {products.map((item) => (
          <Box
            className={s.item}
            key={item.id}
            bgcolor={(theme) => theme.palette.background.default}>
            {item.cover ? (
              <img src={item.cover} alt="productPhoto" />
            ) : (
              <img src={imgNotFound} alt="productPhoto" />
            )}
            <div className={s.details}>
              <h1>{item.title}</h1>
              <p>{item.description.substring(0, 20)}...</p>
              <Box color={(theme) => theme.palette.info.light}>
                {item.quantity} x ${item.price}
              </Box>
            </div>
            <IconButton
              size={'small'}
              onClick={() => dispatch(removeItemAC({ id: item.id }))}>
              <DeleteIcon />
            </IconButton>
          </Box>
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
        <span className={s.reset} onClick={() => dispatch(resetCartAC())}>
          Remove All
        </span>
      </Box>
    </Drawer>
  )
}
