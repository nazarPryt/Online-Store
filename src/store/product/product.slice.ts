import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProductDataType } from '../../services/productService'

const initialState = {
  productItem: {} as ProductDataType,
  products: [] as ProductDataType[],
  photosToShow: [] as string[],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductAC: (
      state,
      action: PayloadAction<{ domainData: ProductDataType }>
    ) => {
      state.productItem = action.payload.domainData
    },
    setAllProductsAC: (
      state,
      action: PayloadAction<{ products: ProductDataType[] }>
    ) => {
      state.products = action.payload.products
    },
    setPhotosToShowAC: (state, action: PayloadAction<{ photos: string[] }>) => {
      state.photosToShow = action.payload.photos
    },
  },
})
export const { setProductAC, setAllProductsAC, setPhotosToShowAC } =
  productSlice.actions
export const productReducer = productSlice.reducer
