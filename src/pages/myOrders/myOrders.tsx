import React, { useEffect } from 'react'

import s from '../../components/Cart/Cart.module.scss'
import { getAllOrdersTC } from '../../store/orders/order.thunk'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

export const MyOrders = () => {
  const dispatch = useAppDispatch()
  const orders = useAppSelector((state) => state.orders)

  useEffect(() => {
    dispatch(getAllOrdersTC())
  }, [])

  return (
    <div>
      {!orders.length && (
        <h2 className={s.emptyText}>You didnt make eny order yet</h2>
      )}
      myOrders page
    </div>
  )
}
