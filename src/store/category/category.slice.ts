import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CategoryType = {
  id: number
  title: string
  products: any
  img: string
}

const initialState = {
  items: [] as CategoryType[],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
})

export const {} = categorySlice.actions

export const categoryReducer = categorySlice.reducer
