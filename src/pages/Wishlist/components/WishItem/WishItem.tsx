import React from 'react'

import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import {
  addToCartAC,
  DomainProductType,
} from '../../../../store/cart/cart.slice'
import {
  augmentQuantityAC,
  reduceQuantityAC,
  removeProductFromWishLisAC,
} from '../../../../store/wishlist/wishlist.slice'
import { useAppDispatch } from '../../../../utils/hooks/redux-hooks'

import imgNotFound from './../../../../assets/imgNotFound.png'
import s from './WishItem.module.scss'

export const WishItem = (props: DomainProductType) => {
  const dispatch = useAppDispatch()

  const totalPrice = () => {
    return (props.quantity * props.price).toFixed(2)
  }
  const handleAddToCart = () => {
    dispatch(addToCartAC({ product: { ...props } }))
  }
  const handleRemoveFromWishList = () => {
    dispatch(removeProductFromWishLisAC({ id: props.id }))
  }
  const handleAugmentQuantity = () => {
    dispatch(augmentQuantityAC({ id: props.id }))
  }
  const handleReduceQuantity = () => {
    dispatch(reduceQuantityAC({ id: props.id }))
  }

  return (
    <TableRow key={props.id} className={s.wrapper}>
      <TableCell align="center" className={s.tableCell}>
        {props.cover ? (
          <img src={props.cover} alt="item img" />
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
          onClick={handleReduceQuantity}>
          <RemoveIcon />
        </IconButton>
        {props.quantity}
        <IconButton
          aria-label="add"
          color="success"
          onClick={handleAugmentQuantity}>
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
