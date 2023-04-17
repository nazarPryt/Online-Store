import { createAsyncThunk } from '@reduxjs/toolkit'

import { orderService } from '../../services/orderService'

import { setAllOrdersAC } from './order.slice'
import { OrderDomainType } from './OrderTypes'

export const getAllOrdersTC = createAsyncThunk(
  'orders/getAllOrders',
  async (arg, thunkAPI) => {
    try {
      const res = await orderService.getAllOrders()
      const orders: OrderDomainType[] = []

      thunkAPI.dispatch(setAllOrdersAC({ orders }))
    } catch (e) {
      console.log(e)
    }
  }
)
