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
  const favorite = false

  return (
    <Card
      sx={{
        maxWidth: 250,
        maxHeight: 400,
        overflow: 'hidden',
      }}>
      <CardContent className={s.CardContent}>
        <Box className={s.imgBox}>
          <img src="https://placehold.co/600x400" alt="" />
        </Box>
        <Typography variant={'h5'}>IPhone</Typography>
        <Box className={s.nameFavo}>
          <Typography sx={{ fontSize: 20 }}>56$</Typography>
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
        <Typography>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. This impressive paella is a perfect party dish
          and a fun meal to cook together with your guests. Add 1 cup of frozen
          peas along with the mussels, if you like. This impressive paella is a
          perfect party dish and a fun meal to cook together with your guests.
          Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  )
}
