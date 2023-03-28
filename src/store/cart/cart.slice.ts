import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartProductType } from './cart.thunks'

const initialState = {
  products: [] as CartProductType[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartAC: (state, action) => {
      const item = state.products.find(
        (item) => item.data.id === action.payload.id
      )

      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.products.push(action.payload)
      }
    },
    removeItemAC: (state, action: PayloadAction<{ id: number }>) => {
      state.products = state.products.filter(
        (item) => item.data.id !== action.payload.id
      )
    },
    resetCartAC: (state) => {
      state.products = []
    },
  },
})

export const { addToCartAC, removeItemAC, resetCartAC } = cartSlice.actions

export const cartReducer = cartSlice.reducer
