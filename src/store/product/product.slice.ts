import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DomainProductType } from '../cart/cart.slice'

const initialState = {
  productItem: {} as DomainProductType,
  products: [] as DomainProductType[],
  photosToShow: [] as string[],
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
    setAllProductsAC: (
      state,
      action: PayloadAction<{ domainData: DomainProductType[] }>
    ) => {
      state.products = action.payload.domainData
    },
    setPhotosToShowAC: (state, action: PayloadAction<{ photos: string[] }>) => {
      state.photosToShow = action.payload.photos
    },
  },
})
export const { setProductAC, setAllProductsAC, setPhotosToShowAC } =
  productSlice.actions
export const productReducer = productSlice.reducer
