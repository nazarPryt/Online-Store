import { createAsyncThunk } from '@reduxjs/toolkit'

import { productService } from '../../services/productService'
import { returnDomainProducts } from '../../utils/handlers/returnDomainProductType'

import { setAllProductsAC } from './product.slice'

export const getSingleProductTC = createAsyncThunk(
  'product/getProduct',
  async (id: number, thunkAPI) => {
    try {
      const res = await productService.getSingleProduct(id)
      // const domainData = returnDomainProductType(res.data)
      // const photos = returnPhotosToShow(domainData)

      // thunkAPI.dispatch(setProductAC({ domainData }))
      // thunkAPI.dispatch(setPhotosToShowAC({ photos }))
    } catch (e) {
      console.log(e)
    }
  }
)
export const getAllProductsTC = createAsyncThunk(
  'product/getAllProducts',
  async (arg, thunkAPI) => {
    try {
      const res = await productService.getAllProducts()
      // const domainData = returnDomainProducts(res.data)

      thunkAPI.dispatch(setAllProductsAC({ products: res.data }))
    } catch (e) {
      console.log(e)
    }
  }
)
