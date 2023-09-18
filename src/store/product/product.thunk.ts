import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { ProductType } from '../../pages/User/components/AddNewProductForm/AddNewProductForm'
import { productService } from '../../services/productService'
import { handleServerNetworkError } from '../../utils/handlers/error-utils'

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
      const res = await productService.AddProduct(product)

      toast.success(`${product.title} was successfully added!!`)
      thunkAPI.dispatch(setAllProductsAC({ products: [res.createdProduct] }))
    } catch (e) {
      console.log(e)
      handleServerNetworkError(e, thunkAPI.dispatch)
    }
  }
)
