import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  ProductCoverType,
  ProductDataType,
} from '../../services/productService'

const initialState = {
  productItem: {} as ProductDataType,
  products: [] as ProductDataType[],
  photosToShow: [] as string[],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductAC: (state, action: PayloadAction<ProductDataType>) => {
      state.productItem = action.payload
    },
    setAllProductsAC: (
      state,
      action: PayloadAction<{ products: ProductDataType[] }>
    ) => {
      state.products = action.payload.products
    },
    setPhotosToShowAC: (state, action: PayloadAction<ProductDataType>) => {
      const photosToShow: string[] = []

      action.payload.imgAll.forEach((img: ProductCoverType) =>
        photosToShow.push(img.url)
      )
      state.photosToShow = photosToShow
    },
  },
})
export const { setProductAC, setAllProductsAC, setPhotosToShowAC } =
  productSlice.actions
export const productReducer = productSlice.reducer
