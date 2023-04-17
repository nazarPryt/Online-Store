import { OrdersDataType } from '../store/orders/OrderTypes'

import { instance } from './instance'

export const orderService = {
  getAllOrders() {
    return instance.get<OrdersDataType>(`/api/orders`, {
      params: { populate: '*' },
    })
  },
}
