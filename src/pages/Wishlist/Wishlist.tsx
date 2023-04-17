import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'

import { SectionMui } from '../../components/SectionMui/SectionMui'
import { addAllToCartAC } from '../../store/cart/cart.slice'
import { cleanWishListAC } from '../../store/wishlist/wishlist.slice'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

import { WishItem } from './components/WishItem/WishItem'
import { WishlistHeader } from './components/WishlistHeader/WishlistHeader'
import s from './Wishlist.module.scss'

export const Wishlist = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.wishlist.items)

  const handleAddAllToCart = () => {
    dispatch(addAllToCartAC({ products: data }))
  }
  const handleCleanWishList = () => {
    dispatch(cleanWishListAC())
  }

  return (
    <SectionMui title={'Wishlist'}>
      <Container>
        {data.length ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <WishlistHeader />

                <TableBody>
                  {data.map((row) => (
                    <WishItem
                      imgAll={row.imgAll}
                      oldPrice={row.oldPrice}
                      category={row.category}
                      description={row.description}
                      price={row.price}
                      title={row.title}
                      id={row.id}
                      key={row.id}
                      quantity={row.quantity}
                      available={row.available}
                      cover={row.cover}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={s.bottomButtons}>
              <Button color={'error'} onClick={handleCleanWishList}>
                Clean Wishlist
              </Button>
              <Button
                variant={'contained'}
                color={'success'}
                onClick={handleAddAllToCart}>
                Add to Cart All
              </Button>
            </div>
          </>
        ) : (
          <Box
            color={(theme) => theme.palette.text.secondary}
            style={{ textAlign: 'center', fontSize: '30px' }}>
            Your wish list is empty
          </Box>
        )}
      </Container>
    </SectionMui>
  )
}
