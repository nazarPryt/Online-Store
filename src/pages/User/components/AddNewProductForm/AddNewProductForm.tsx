import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { InferType, object } from 'yup'

import { AddProductTC } from '../../../../store/product/product.thunk'
import { useAppDispatch } from '../../../../utils/hooks/redux-hooks'

import s from './AddNewProductForm.module.scss'
import { MultipleSelect } from './components/MultipleSelect'

export const Categories = [
  'Computers',
  'Tablets',
  'Televisions',
  'Smartphones',
  'Electronics',
  'Washing machines',
] as const

type CategoriesType = typeof Categories

const ProductSchema = object({
  title: yup.string().required(),
  description: yup.string().required(),
  available: yup.boolean().required(),
  price: yup.number().positive().required(),
  oldPrice: yup.number().positive().required(),
  cover: yup.mixed().required('Required'),
  imgAll: yup.mixed(),
  category: yup.string().required(),
})

export type ProductType = InferType<typeof ProductSchema>

export const AddNewProductForm = () => {
  const dispatch = useAppDispatch()

  const { register, handleSubmit, watch, setValue } = useForm<ProductType>({
    resolver: yupResolver(ProductSchema),
    defaultValues: {
      available: true,
      category: 'iphone',
      description: 'some descripttion',
      price: 500,
      oldPrice: 600,
      title: 'iphone',
      cover: '',
      imgAll: '',
    },
  })
  // const selectValue = watch('category') as string[]
  // const handleChange = (value: string[]) => setValue('category', value)

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit((data) => dispatch(AddProductTC(data)))}>
      <TextField
        label="Title"
        variant="outlined"
        type="text"
        {...register('title')}
      />

      <TextField
        label="Description"
        multiline
        maxRows={4}
        variant="outlined"
        {...register('description')}
      />

      <label>
        Available:
        <Checkbox defaultChecked color="success" {...register('available')} />
      </label>

      <label>
        Price:
        <input type="number" {...register('price')} />
      </label>

      <label>
        Old Price:
        <input type="number" {...register('oldPrice')} />
      </label>

      {/*<MultipleSelect value={selectValue} onChange={handleChange} />*/}

      <label>
        Cover:
        <input type="file" accept="image/*" {...register('cover')} />
      </label>

      <label>
        All Images:
        <input type="file" multiple accept="image/*" {...register('imgAll')} />
      </label>

      <Button type="submit" variant={'contained'}>
        Send
      </Button>
    </form>
  )
}
