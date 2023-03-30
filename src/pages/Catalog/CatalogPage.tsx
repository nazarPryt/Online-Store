import React, { useEffect } from 'react'

import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useAppDispatch } from '../../utils/hooks/redux-hooks'

import s from './CatalogPage.module.scss'

export const CatalogPage = () => {
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(getAll)
  // }, [])

  return (
    <div className={s.wrapper}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
