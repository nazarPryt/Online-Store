import { createAsyncThunk } from '@reduxjs/toolkit'

import { productService } from '../../services/productService'

import { setProductAC } from './product.slice'

export const getSingleProductTC = createAsyncThunk(
  'product/getProduct',
  async (id: number, thunkAPI) => {
    try {
      const res = await productService.getSingleProduct(id)

      thunkAPI.dispatch(setProductAC({ data: res.data.data.attributes }))
      // await localStorage.setItem('auth_token', res.data.jwt)
    } catch (e) {
      console.log(e)
    }
  }
)
