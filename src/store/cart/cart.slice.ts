import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DomainProductType = {
  id: number
  title: string
  description: string
  price: number
  oldPrice: number
  category: string
  available: boolean
  img: string
  quantity: number
}

const initialState = {
  items: [] as DomainProductType[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartAC: (
      state,
      action: PayloadAction<{ product: DomainProductType }>
    ) => {
      const item = state.items.find(
        (item) => item.id === action.payload.product.id
      )

      if (item) {
        item.quantity += action.payload.product.quantity
      } else {
        state.items.push(action.payload.product)
      }
    },
    removeItemAC: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    resetCartAC: (state) => {
      state.items = []
    },
  },
})

export const { addToCartAC, removeItemAC, resetCartAC } = cartSlice.actions

export const cartReducer = cartSlice.reducer
