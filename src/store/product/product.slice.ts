import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SingleProductTypeDataAttributes } from '../../services/productService'

const initialState = {
  productItem: {} as SingleProductTypeDataAttributes,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductAC: (state, action: PayloadAction<{ data: any }>) => {
      state.productItem = action.payload.data
    },
  },
})
export const { setProductAC } = productSlice.actions
export const productReducer = productSlice.reducer
