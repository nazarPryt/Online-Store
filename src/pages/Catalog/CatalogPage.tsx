import React, { useEffect } from 'react'

import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useAppDispatch } from '../../utils/hooks/redux-hooks'

export const CatalogPage = () => {
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(getAll)
  // }, [])

  return (
    <div>
      <ProductCard />
    </div>
  )
}
