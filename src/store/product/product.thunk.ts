import { createAsyncThunk } from '@reduxjs/toolkit'

import { productService } from '../../services/productService'
import { returnDomainProductType } from '../../utils/handlers/returnDomainProductType'

import { setProductAC } from './product.slice'

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
