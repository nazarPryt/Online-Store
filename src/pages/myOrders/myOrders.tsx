import React, { useEffect } from 'react'

import { getAllOrdersTC } from '../../store/orders/order.thunk'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

export const MyOrders = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.orders)

  useEffect(() => {
    dispatch(getAllOrdersTC())
  }, [])

  return <div>myOrders page</div>
}
