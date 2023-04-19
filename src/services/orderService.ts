import { DomainProductType } from '../store/cart/cart.slice'
import { OrdersDataType } from '../store/orders/OrderTypes'

import { instance } from './instance'

export const orderService = {
  getAllOrders() {
    return instance.get<OrdersDataType>(`/api/orders`, {
      params: { populate: '*' },
    })
  },
  makePayment(products: DomainProductType[]) {
    return instance.post('/api/orders', { products })
  },
}
