import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DomainProductType } from '../cart/cart.slice'

const initialState = {
  productItem: {} as DomainProductType,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductAC: (
      state,
      action: PayloadAction<{ domainData: DomainProductType }>
    ) => {
      state.productItem = action.payload.domainData
    },
  },
})
export const { setProductAC } = productSlice.actions
export const productReducer = productSlice.reducer
