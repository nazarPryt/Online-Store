import React, { useEffect } from 'react'

import { ProductCard } from '../../components/ProductCard/ProductCard'
import { getAllProductsTC } from '../../store/product/product.thunk'
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks'

import s from './CatalogPage.module.scss'

export const CategoryPage = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.product.products)

  useEffect(() => {
    dispatch(getAllProductsTC())
  }, [])

  return (
    <div className={s.wrapper}>
      {data.map((product) => (
        <ProductCard
          id={product.id}
          key={product.id}
          available={product.available}
          img={product.cover}
          oldPrice={product.oldPrice}
          price={product.price}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  )
}
