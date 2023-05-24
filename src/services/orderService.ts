import { OrderDataType } from '../store/orders/order.slice'

import { instance } from './instance'
import { ProductDataType } from './productService'

export const orderService = {
  getAllOrders() {
    return instance.get<OrderDataType[]>(`/api/orders/my`)
  },
  makePayment(data: { products: ProductDataType[]; userID: string }) {
    return instance.post('/api/orders', data)
  },
}
