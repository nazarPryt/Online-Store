import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProductDataType } from '../../services/productService'

const initialState = {
  items: [] as OrderDataType[],
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setAllOrdersAC: (
      state,
      action: PayloadAction<{ order: OrderDataType[] }>
    ) => {
      state.items = action.payload.order
    },
  },
})

export const { setAllOrdersAC } = orderSlice.actions

export const orderReducer = orderSlice.reducer

export type OrderDataType = {
  _id: string
  userID: string
  stripeId: string
  createdAt: string
  products: ProductDataType[]
}
