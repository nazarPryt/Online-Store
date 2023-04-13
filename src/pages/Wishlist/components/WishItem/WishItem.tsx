import React, { useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { addToCartAC } from '../../../../store/cart/cart.slice'
import { removeProductFromWishLisAC } from '../../../../store/wishlist/wishlist.slice'
import { useAppDispatch } from '../../../../utils/hooks/redux-hooks'

import imgNotFound from './../../../../assets/imgNotFound.png'
import s from './WishItem.module.scss'
type d = {
  id: number
  title: string
  description: string
  price: number
  oldPrice: number
  category: string
  available: boolean
  img: string
  quantity: number
}

export const WishItem = (props: d) => {
  const dispatch = useAppDispatch()
  const [quantity, setQuantity] = useState(props.quantity)

  const totalPrice = () => {
    return (quantity * props.price).toFixed(2)
  }
  const handleAddToCart = () => {
    dispatch(addToCartAC({ product: { ...props } }))
  }
  const handleRemoveFromWishList = () => {
    dispatch(removeProductFromWishLisAC({ id: props.id }))
  }

  return (
    <TableRow key={props.id} className={s.wrapper}>
      <TableCell align="center" className={s.tableCell}>
        {props.img ? (
          <img src={props.img} alt="item img" />
        ) : (
          <img src={imgNotFound} alt="item img" />
        )}
      </TableCell>
      <TableCell align="center">{props.title}</TableCell>
      <TableCell align="center">${props.price}</TableCell>
      <TableCell align="center">
        <IconButton
          aria-label="subtract"
          color="error"
          onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
          <RemoveIcon />
        </IconButton>
        {quantity}
        <IconButton
          aria-label="add"
          color="success"
          onClick={() => setQuantity(quantity + 1)}>
          <AddIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">${totalPrice()}</TableCell>
      <TableCell align="center">
        <IconButton
          aria-label="delete"
          color={'error'}
          onClick={handleRemoveFromWishList}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          onClick={handleAddToCart}
          aria-label="buy"
          color={'success'}
          disabled={!props.available}>
          <ShoppingCartRoundedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
