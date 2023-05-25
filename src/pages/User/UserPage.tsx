import React from 'react'

import { AddNewProduct } from './components/AddNewProduct/AddNewProduct'
import { ShowAllUsers } from './components/ShowAllUsers/ShowAllUsers'

export const UserPage = () => {
  return (
    <div>
      <AddNewProduct />
      <ShowAllUsers />
    </div>
  )
}
