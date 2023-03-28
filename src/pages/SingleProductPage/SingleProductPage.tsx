import React, { useEffect, useState } from 'react'

import AddIcon from '@mui/icons-material/Add'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import RemoveIcon from '@mui/icons-material/Remove'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useParams } from 'react-router-dom'

import { getSingleProductTC } from '../../store/product/product.thunk'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

import s from './SingleProductPage.module.scss'

export const SingleProductPage = () => {
  const data = useAppSelector((state) => state.product.productItem)
  const dispatch = useAppDispatch()

  const productId = useParams().id
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const photos = [
    'https://images.pexels.com/photos/6551795/pexels-photo-6551795.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4022587/pexels-photo-4022587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]

  useEffect(() => {
    if (productId) {
      dispatch(getSingleProductTC(+productId))
    }
  }, [productId])

  const handleAddToCart = () => {
    // const product: CartProductType = {
    //   id: data.id,
    //   attributes: {
    //     name: data.attributes.name,
    //     description: data.attributes.description,
    //     price: data.attributes.price,
    //     // img: data.attributes.img.data.attributes.url,
    //     quantity,
    //   },
    // }
    // dispatch(addToCartAC({ product: {} }))
  }

  return (
    <section className={s.product}>
      <Box className={s.left}>
        <Box className={s.images}>
          <img src={photos[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={photos[1]} alt="" onClick={() => setSelectedImg(1)} />
        </Box>
        <Box className={s.mainImg}>
          <img src={photos[selectedImg]} alt="" />
        </Box>
      </Box>

      <Box className={s.right}>
        <h1>{data.title}</h1>
        <span>${data.price}</span>
        <p>{data.description}</p>
        <Box className={s.quantity}>
          <IconButton
            aria-label="subtract"
            color="success"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
            <RemoveIcon />
          </IconButton>
          {quantity}
          <IconButton
            aria-label="add"
            color="success"
            onClick={() => setQuantity((prev) => prev + 1)}>
            <AddIcon />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon onClick={handleAddToCart} />}>
          Add to Cart
        </Button>
      </Box>
    </section>
  )
}
