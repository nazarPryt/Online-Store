import { ProductType } from '../pages/User/components/AddNewProductForm/AddNewProductForm'

import { instance } from './instance'

export const productService = {
  getSingleProduct(id: string) {
    return instance.get<ProductDataType>(`/api/products/${id}`)
  },
  getAllProducts() {
    return instance.get<ProductDataType[]>(`/api/products`)
  },
  AddProduct(product: any) {
    return instance.post<ProductType, AddProductResponse>(
      `/api/products`,
      product
    )
  },
}

export type ProductDataType = {
  _id: string
  available: boolean
  description: string
  title: string
  price: number
  oldPrice: number
  quantity: number
  cover: ProductCoverType
  imgAll: string[]
  category: string[]
}
export type AddProductResponse = {
  createdProduct: ProductDataType
  message: string
}
export type ProductCoverType = {
  url: string
  original_filename: string
  width: number
  height: number
}
