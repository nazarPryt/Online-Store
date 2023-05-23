import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProductDataType } from '../../services/productService'

const initialState = {
  items: [] as ProductDataType[],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addProductToWishList: (
      state,
      action: PayloadAction<{ product: ProductDataType }>
    ) => {
      const isProductAdded = state.items.find(
        (prod) => prod._id === action.payload.product._id
      )

      if (!isProductAdded) state.items.push(action.payload.product)
    },
    removeProductFromWishLisAC: (
      state,
      action: PayloadAction<{ _id: string }>
    ) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      )
    },
    cleanWishListAC: (state) => {
      state.items = []
    },
    augmentQuantityAC: (state, action: PayloadAction<{ _id: string }>) => {
      const product = state.items.find(
        (product) => product._id === action.payload._id
      )

      if (product) product.quantity += 1
    },
    reduceQuantityAC: (state, action: PayloadAction<{ _id: string }>) => {
      const product = state.items.find(
        (product) => product._id === action.payload._id
      )

      if (product) {
        product.quantity = product.quantity === 1 ? 1 : product.quantity - 1
      }
    },
  },
})

export const {
  reduceQuantityAC,
  cleanWishListAC,
  removeProductFromWishLisAC,
  addProductToWishList,
  augmentQuantityAC,
} = wishlistSlice.actions

export const wishlistReducer = wishlistSlice.reducer
