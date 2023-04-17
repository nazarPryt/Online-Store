import { createAsyncThunk } from '@reduxjs/toolkit'

import { orderService } from '../../services/orderService'
import { returnDomainOrdersType } from '../../utils/handlers/returnDomainOrdersType'

import { setAllOrdersAC } from './order.slice'
import { OrderDomainType } from './OrderTypes'

export const getAllOrdersTC = createAsyncThunk(
  'orders/getAllOrders',
  async (arg, thunkAPI) => {
    try {
      const res = await orderService.getAllOrders()
      const orders: OrderDomainType[] = returnDomainOrdersType(res.data)

      thunkAPI.dispatch(setAllOrdersAC({ orders }))
    } catch (e) {
      console.log(e)
    }
  }
)
