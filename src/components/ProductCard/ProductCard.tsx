import React from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { PATH } from '../../pages/pages'
import { addToCartAC, DomainProductType } from '../../store/cart/cart.slice'
import { addProductToWishList } from '../../store/wishlist/wishlist.slice'
import { useAppDispatch } from '../../utils/hooks/redux-hooks'

import s from './ProductCard.module.scss'

export const ProductCard = (props: DomainProductType) => {
  const dispatch = useAppDispatch()

  const handleAddToWishList = () => {
    const product = { ...props }

    dispatch(addProductToWishList({ product }))
  }
  const handleAddToCart = () => {
    const product = { ...props }

    dispatch(addToCartAC({ product }))
  }

  return (
    <Card
      sx={{
        maxWidth: 250,
        maxHeight: 500,
        overflow: 'hidden',
      }}>
      <CardContent className={s.CardContent}>
        <a href={`${PATH.product}${props.id}`}>
          <Box className={s.imgBox}>
            <img src={props.cover} alt="product cover" />
          </Box>
          <p>{props.title}</p>
        </a>

        <Box className={s.nameFavo}>
          <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
            ${props.price}
          </Typography>
          <Typography
            sx={{ fontSize: 20, textDecoration: 'line-through', opacity: 0.5 }}>
            ${props.oldPrice}
          </Typography>
          <IconButton
            onClick={handleAddToWishList}
            size="large"
            color={'secondary'}
            aria-label="add to favorite">
            <FavoriteIcon />
          </IconButton>
        </Box>
        {props.available ? (
          <Typography variant={'h6'} color={'green'}>
            Available
          </Typography>
        ) : (
          <Typography variant={'h6'} color={'red'}>
            Not available
          </Typography>
        )}
        <Button
          variant="contained"
          disabled={!props.available}
          onClick={handleAddToCart}
          startIcon={<AddShoppingCartIcon />}>
          Add to Cart
        </Button>
        <Typography component="p">
          {props.description.substring(0, 100)}...
        </Typography>
      </CardContent>
    </Card>
  )
}
