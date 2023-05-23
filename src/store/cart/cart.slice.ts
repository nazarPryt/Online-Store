import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProductDataType } from '../../services/productService'

// export type DomainProductType = {
//   id: number
//   title: string
//   description: string
//   price: number
//   oldPrice: number
//   category: string
//   available: boolean
//   cover: string
//   quantity: number
//   imgAll: string[]
// }

const initialState = {
  items: [] as ProductDataType[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartAC: (
      state,
      action: PayloadAction<{ product: ProductDataType }>
    ) => {
      const item = state.items.find(
        (item) => item._id === action.payload.product._id
      )

      if (item) {
        item.quantity += action.payload.product.quantity
      } else {
        state.items.push(action.payload.product)
      }
    },
    addAllToCartAC: (
      state,
      action: PayloadAction<{ products: ProductDataType[] }>
    ) => {
      action.payload.products.map((el) => state.items.push(el))
    },
    removeItemAC: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item._id !== action.payload.id)
    },
    resetCartAC: (state) => {
      state.items = []
    },
  },
})

export const { addToCartAC, removeItemAC, resetCartAC, addAllToCartAC } =
  cartSlice.actions

export const cartReducer = cartSlice.reducer
