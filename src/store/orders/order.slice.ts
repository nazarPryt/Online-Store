import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { OrderDomainType } from './OrderTypes'

const initialState = {
  items: [] as OrderDomainType[],
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setAllOrdersAC: (
      state,
      action: PayloadAction<{ orders: OrderDomainType[] }>
    ) => {
      state.items = action.payload.orders
    },
  },
})

export const { setAllOrdersAC } = orderSlice.actions

export const orderReducer = orderSlice.reducer
