import React from 'react'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
export const ProductCard = () => {
  const available = true

  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 500,
        overflow: 'hidden',
      }}>
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 10,
        }}>
        <Box sx={{ maxWidth: '90%', margin: '0 auto' }}>
          <img
            src="https://placehold.co/600x400"
            alt=""
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Typography variant={'h5'}>Iphone</Typography>
        <Typography variant={'h4'}>56$</Typography>
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
        <Typography
          style={{
            whiteSpace: 'pre-line',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}>
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
