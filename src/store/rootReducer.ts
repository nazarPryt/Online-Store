import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { appReducer } from './app/app.slice'
import { authReducer } from './auth/auth.slice'
import { cartReducer } from './cart/cart.slice'
import { categoryReducer } from './category/category.slice'
import { orderReducer } from './orders/order.slice'
import { productReducer } from './product/product.slice'
import { wishlistReducer } from './wishlist/wishlist.slice'

const cartPersistConfig = {
  key: 'cart',
  version: 1,
  storage,
}
const wishlistPersistConfig = {
  key: 'wishlist',
  version: 1,
  storage,
}
const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer)
const wishlistPersistedReducer = persistReducer(
  wishlistPersistConfig,
  wishlistReducer
)

export const store = configureStore({
  reducer: {
    cart: cartPersistedReducer,
    wishlist: wishlistPersistedReducer,
    auth: authReducer,
    app: appReducer,
    product: productReducer,
    category: categoryReducer,
    orders: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
