import { instance } from './instance'

export const productService = {
  getSingleProduct(id: number) {
    return instance.get<ProductDataType>(`/api/products/${id}`)
  },
  getAllProducts() {
    return instance.get<ProductDataType[]>(`/api/products`)
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
  cover: string
  imgAll: string[]
  category: string[]
}
