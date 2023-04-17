import { createAsyncThunk } from '@reduxjs/toolkit'

import { productService } from '../../services/productService'
import {
  returnDomainProducts,
  returnDomainProductType,
} from '../../utils/handlers/returnDomainProductType'

import { setAllProductsAC, setProductAC } from './product.slice'

export const getSingleProductTC = createAsyncThunk(
  'product/getProduct',
  async (id: number, thunkAPI) => {
    try {
      const res = await productService.getSingleProduct(id)
      const domainData = returnDomainProductType(res.data)

      thunkAPI.dispatch(setProductAC({ domainData }))
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
      const domainData = returnDomainProducts(res.data)

      thunkAPI.dispatch(setAllProductsAC({ domainData }))
    } catch (e) {
      console.log(e)
    }
  }
)
