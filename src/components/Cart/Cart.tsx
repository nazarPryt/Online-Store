import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'

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

  return (
    <Drawer anchor={'right'} open={props.isOpen} onClose={props.handleClose}>
      <div className={s.cart}>
        <h1>Products in your cart</h1>
        {products && <h2 className={s.emptyText}>Your cart is empty</h2>}
        {products?.map((item) => (
          <div className={s.item} key={item.id}>
            {/*<img src={} alt="" />*/}
            <div className={s.details}>
              <h1>{item.title}</h1>
              <p>{item.description.substring(0, 100)}</p>
              <div className={s.price}>
                {item.quantity} x ${item.price}
              </div>
            </div>
            <IconButton
              aria-label={s.delete}
              onClick={() => dispatch(removeItemAC({ id: item.id }))}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        <div className={s.total}>
          <span>SUBTOTAL</span>
          <span>${totalPrice()}</span>
        </div>
        <Button disabled={!!products.length}>Pay</Button>
        <span className={s.reset} onClick={() => dispatch(resetCartAC())}>
          Reset Cart
        </span>
      </div>
    </Drawer>
  )
}
