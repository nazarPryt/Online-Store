import { OrdersDataType } from '../store/orders/OrderTypes'

import { instance } from './instance'
import { ProductDataType } from './productService'

export const orderService = {
  getAllOrders() {
    return instance.get<OrdersDataType>(`/api/orders`, {
      params: { populate: '*' },
    })
  },
  makePayment(products: ProductDataType[]) {
    return instance.post('/api/orders', { products })
  },
}
