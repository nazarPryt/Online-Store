import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { DomainProductType } from '../cart/cart.slice'

const initialState = {
  items: [
    {
      id: 1,
      title: 'first title',
      description: 'some long descriptiondddddddddddddd',
      price: 45,
      oldPrice: 70,
      category: 'phones',
      available: true,
      cover: 'https://i.pravatar.cc/300',
      quantity: 3,
    },
    {
      id: 2,
      title: 'second title',
      description: 'some long descriptionddddddddddddd',
      price: 45,
      oldPrice: 70,
      category: 'phones',
      available: false,
      cover: 'https://i.pravatar.cc/300',
      quantity: 1,
    },
    {
      id: 3,
      title: 'third title',
      description: 'some long description',
      price: 45,
      oldPrice: 70,
      category: 'phones',
      available: true,
      cover: '',
      quantity: 1,
    },
  ] as DomainProductType[],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addProductToWishList: (
      state,
      action: PayloadAction<{ product: DomainProductType }>
    ) => {
      state.items.push(action.payload.product)
    },
    removeProductFromWishLisAC: (
      state,
      action: PayloadAction<{ id: number }>
    ) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    cleanWishListAC: (state) => {
      state.items = []
    },
  },
})

export const {
  cleanWishListAC,
  removeProductFromWishLisAC,
  addProductToWishList,
} = wishlistSlice.actions

export const wishlistReducer = wishlistSlice.reducer
