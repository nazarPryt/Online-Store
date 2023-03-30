import React from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'

import { WishItem } from './components/WishItem/WishItem'
import { WishlistHeader } from './components/WishlistHeader/WishlistHeader'
import s from './Wishlist.module.scss'

export const WishlistMui = styled('section')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}))

export const Wishlist = () => {
  const data = [
    {
      id: 1,
      title: 'first title',
      description: 'some long description',
      price: 45,
      oldPrice: 70,
      category: 'phones',
      available: true,
      img: 'https://i.pravatar.cc/300',
      quantity: 3,
    },
    {
      id: 2,
      title: 'second title',
      description: 'some long description',
      price: 45,
      oldPrice: 70,
      category: 'phones',
      available: false,
      img: 'https://i.pravatar.cc/300',
      quantity: 1,
    },
    {
      id: 3,
      title: 'third title',
      description: 'some long description',
      price: 45,
      oldPrice: 70,
      category: 'phones',
      available: true,
      img: '',
      quantity: 1,
    },
  ]

  return (
    <WishlistMui className={s.wrapper}>
      <h1>Wishlist</h1>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 570 }} aria-label="simple table">
            <WishlistHeader />

            <TableBody>
              {data.map((row) => (
                <WishItem
                  price={row.price}
                  title={row.title}
                  id={row.id}
                  key={row.id}
                  quantity={row.quantity}
                  available={row.available}
                  img={row.img}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={s.bottomButtons}>
          <Button color={'error'}>Clean Wishlist</Button>
          <Button variant={'contained'} color={'success'}>
            Add to Cart All
          </Button>
        </div>
      </Container>
    </WishlistMui>
  )
}
