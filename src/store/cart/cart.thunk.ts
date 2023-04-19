import { createAsyncThunk } from '@reduxjs/toolkit'
import { loadStripe } from '@stripe/stripe-js'

import { orderService } from '../../services/orderService'

import { DomainProductType, resetCartAC } from './cart.slice'

export const handlePaymentTC = createAsyncThunk(
  'orders/handlePayment',
  async (products: DomainProductType[], thunkAPI) => {
    const stripePromise = loadStripe(
      'pk_test_51MwTodKDtk8DBuSOn5gl7bCmFRkpQ5rSzE7trWoKjxH78o6w6rCII2AtDNfHnn02OJX5IQf4ry3spdhujEF1JhG100wjP2bmrq'
    )

    try {
      const stripe = await stripePromise
      const res = await orderService.makePayment(products)

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })

      await thunkAPI.dispatch(resetCartAC())
    } catch (e) {
      console.log(e)
    }
  }
)
