import React from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import s from './ProductCard.module.scss'

type ProductCardType = {}
export const ProductCard = (props: any) => {
  const available = true
  const oldPrice = 700
  const favorite = false
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque autem dicta distinctio dolores eaque inventore labore laudantium, nesciunt quidem? A ab eveniet expedita facere fugit iste reprehenderit suscipit temporibus.'

  return (
    <Card
      sx={{
        maxWidth: 250,
        maxHeight: 500,
        overflow: 'hidden',
      }}>
      <CardContent className={s.CardContent}>
        <Box className={s.imgBox}>
          <img src="https://placehold.co/600x400" alt="" />
        </Box>
        <Typography variant={'h5'}>IPhone</Typography>
        <Box className={s.nameFavo}>
          <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>56$</Typography>
          <Typography
            sx={{ fontSize: 20, textDecoration: 'line-through', opacity: 0.5 }}>
            ${oldPrice}
          </Typography>
          <IconButton
            size="large"
            color={favorite ? 'secondary' : 'primary'}
            aria-label="add to favorite">
            <FavoriteIcon />
          </IconButton>
        </Box>
        {available ? (
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
          disabled={!available}
          startIcon={<AddShoppingCartIcon />}>
          Add to Cart
        </Button>
        <Typography component="p">{text.substring(0, 100)}...</Typography>
      </CardContent>
    </Card>
  )
}
