import { instance } from './instance'
import { AllProductsDataType, ProductDataType } from './servicesTypes'

export const productService = {
  getSingleProduct(id: number) {
    return instance.get<ProductDataType>(`/api/products/${id}`, {
      params: { populate: '*' },
    })
  },
  getAllProducts() {
    return instance.get<AllProductsDataType>(`/api/products`, {
      params: { populate: '*' },
    })
  },
}
