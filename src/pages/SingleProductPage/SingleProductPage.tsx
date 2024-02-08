import React, { useEffect, useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import RemoveIcon from '@mui/icons-material/Remove'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useParams } from 'react-router-dom'

import { addToCartAC } from '../../store/cart/cart.slice'
import { getSingleProductTC } from '../../store/product/product.thunk'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

import s from './SingleProductPage.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { addProductToWishList } from '../../store/wishlist/wishlist.slice'
import { ProductDetails } from '../../components/ProductDetails/ProductDetails'

export const SingleProductPage = () => {
  const data = useAppSelector((state) => state.product.productItem)
  const photosToShow = useAppSelector((state) => state.product.photosToShow)
  const dispatch = useAppDispatch()

  const productId = useParams().id
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (productId) {
      dispatch(getSingleProductTC(productId))
    }
  }, [productId])

  const handleAddToCart = () => {
    const product = {
      ...data,
      quantity,
    }

    dispatch(addToCartAC({ product }))
  }

  const handleSubtractQuantity = () => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
  }

  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1)
  }
  const handleAddToWishList = () => {
    dispatch(addProductToWishList({ product: data }))
  }
  return (
    <section className={s.product}>
      <Box className={s.left}>
        <Box className={s.images}>
          {photosToShow.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="productImg"
              onClick={() => setSelectedImg(index)}
            />
          ))}
        </Box>
        <Box className={s.mainImg}>
          <img src={photosToShow[selectedImg]} alt="productImg" />
        </Box>
      </Box>

      <Box className={s.right}>
        <h1>{data.title}</h1>
        <span>${data.price}</span>
        <p>{data.description}</p>
        <Box className={s.buttonsBox}>
          <div>
            <IconButton
              aria-label="subtract"
              color="success"
              onClick={handleSubtractQuantity}>
              <RemoveIcon />
            </IconButton>
            {quantity}
            <IconButton
              aria-label="add"
              color="success"
              onClick={handleAddQuantity}>
              <AddIcon />
            </IconButton>
          </div>
          <IconButton
            onClick={handleAddToWishList}
            size="large"
            color={'secondary'}
            aria-label="add to favorite">
            <FavoriteIcon />
          </IconButton>
          <Button
            onClick={handleAddToCart}
            variant="contained"
            startIcon={<AddShoppingCartIcon />}>
            Add to Cart
          </Button>
        </Box>
        <ProductDetails />
      </Box>
    </section>
  )
}
