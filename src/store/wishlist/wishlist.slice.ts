import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DomainProductType } from '../cart/cart.slice'

const initialState = {
  items: [] as DomainProductType[],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addProductToWishList: (
      state,
      action: PayloadAction<{ product: DomainProductType }>
    ) => {
      const isProductAdded = state.items.find(
        (prod) => prod.id === action.payload.product.id
      )

      if (!isProductAdded) state.items.push(action.payload.product)
    },
    removeProductFromWishLisAC: (
      state,
      action: PayloadAction<{ id: number }>
    ) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    cleanWishListAC: (state) => {
      state.items = []
    },
    augmentQuantityAC: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.items.find(
        (product) => product.id === action.payload.id
      )

      if (product) product.quantity += 1
    },
    reduceQuantityAC: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.items.find(
        (product) => product.id === action.payload.id
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
