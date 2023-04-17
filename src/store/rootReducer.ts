import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './app/app.slice'
import { authReducer } from './auth/auth.slice'
import { cartReducer } from './cart/cart.slice'
import { categoryReducer } from './category/category.slice'
import { orderReducer } from './orders/order.slice'
import { productReducer } from './product/product.slice'
import { wishlistReducer } from './wishlist/wishlist.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    category: categoryReducer,
    orders: orderReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
