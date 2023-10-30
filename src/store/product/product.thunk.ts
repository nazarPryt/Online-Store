import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { ProductType } from '../../pages/User/components/AddNewProductForm/AddNewProductForm'
import { productService } from '../../services/productService'
import { handleServerNetworkError } from '../../utils/handlers/error-utils'

import {
  setAllProductsAC,
  setPhotosToShowAC,
  setProductAC,
} from './product.slice'

export const getSingleProductTC = createAsyncThunk(
  'product/getProduct',
  async (id: string, thunkAPI) => {
    try {
      const res = await productService.getSingleProduct(id)

      thunkAPI.dispatch(setProductAC(res.data))
      thunkAPI.dispatch(setPhotosToShowAC(res.data))
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

      thunkAPI.dispatch(setAllProductsAC({ products: res.data }))
    } catch (e) {
      console.log(e)
    }
  }
)

export const AddProductTC = createAsyncThunk(
  'product/AddProduct',
  async (product: ProductType, thunkAPI) => {
    try {
      let formData = new FormData()

      //@ts-ignore
      formData.append('cover', product.cover[0])

      //@ts-ignore
      for (const file of product.imgAll) {
        formData.append('imgAll', file)
      }

      const postData = JSON.stringify(product)

      formData.append('postData', postData)

      const res = await productService.AddProduct(formData)

      toast.success(`${product.title} was successfully added!!`)
      thunkAPI.dispatch(setAllProductsAC({ products: [res.createdProduct] }))
    } catch (e) {
      console.log(e)
      handleServerNetworkError(e, thunkAPI.dispatch)
    }
  }
)
