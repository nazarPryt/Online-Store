import { createAsyncThunk } from '@reduxjs/toolkit'

import { orderService } from '../../services/orderService'

import { setAllOrdersAC } from './order.slice'

export const getAllOrdersTC = createAsyncThunk(
  'orders/getAllOrders',
  async (arg, thunkAPI) => {
    try {
      const res = await orderService.getAllOrders()

      thunkAPI.dispatch(setAllOrdersAC({ order: res.data }))
    } catch (e) {
      console.log(e)
    }
  }
)
