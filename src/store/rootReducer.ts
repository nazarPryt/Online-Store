import { configureStore } from '@reduxjs/toolkit'

import { adminReducer } from './admin/admin.slice'
import { appReducer } from './app/app.slice'
import { authReducer } from './auth/auth.slice'
import { cartReducer } from './cart/cart.slice'
import { categoryReducer } from './category/category.slice'
import { orderReducer } from './orders/order.slice'
import { productReducer } from './product/product.slice'
import { wishlistReducer } from './wishlist/wishlist.slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    app: appReducer,
    admin: adminReducer,
    product: productReducer,
    category: categoryReducer,
    orders: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
