import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import imgNotFound from '../../../assets/imgNotFound.png'
import { DomainProductType, removeItemAC } from '../../../store/cart/cart.slice'
import { useAppDispatch } from '../../../utils/hooks/redux-hooks'

import s from './CartProductItem.module.scss'

type CartProductItemType = Pick<
  DomainProductType,
  'price' | 'description' | 'quantity' | 'id' | 'title' | 'cover'
>
export const CartProductItem = (props: CartProductItemType) => {
  const dispatch = useAppDispatch()

  return (
    <Box
      className={s.item}
      key={props.id}
      bgcolor={(theme) => theme.palette.background.default}>
      {props.cover ? (
        <img src={props.cover} alt="productPhoto" />
      ) : (
        <img src={imgNotFound} alt="productPhoto" />
      )}
      <div className={s.details}>
        <h1>{props.title}</h1>
        <p>{props.description.substring(0, 20)}...</p>
        <Box color={(theme) => theme.palette.info.light}>
          {props.quantity} x ${props.price}
        </Box>
      </div>
      <IconButton
        size={'small'}
        onClick={() => dispatch(removeItemAC({ id: props.id }))}>
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}
