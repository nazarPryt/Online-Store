import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './app/app.slice'
import { authReducer } from './auth/auth.slice'
import { cartReducer } from './cart/cart.slice'
import { productReducer } from './product/product.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    product: productReducer,
    cart: cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
