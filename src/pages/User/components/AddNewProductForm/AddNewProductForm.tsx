import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { InferType, object } from 'yup'

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
  cover: yup.string().required(),
  imgAll: yup.array().of(yup.string()).required(),
  category: yup.array().of(yup.string()),
})

type ProductType = InferType<typeof ProductSchema>

export const AddNewProductForm = () => {
  const { register, handleSubmit, watch, setValue } = useForm<ProductType>({
    resolver: yupResolver(ProductSchema),
    defaultValues: {
      available: true,
      category: ['iphone'],
      description: 'some descripttion',
      price: 500,
      oldPrice: 600,
      title: 'iphone',
      cover: 'https://picsum.photos/200/300',
      imgAll: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
    },
  })
  const selectValue = watch('category') as string[]
  const handleChange = (value: string[]) => setValue('category', value)

  return (
    <div>
      <form
        className={s.form}
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}>
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

        <MultipleSelect value={selectValue} onChange={handleChange} />

        <label>
          Cover:
          <input type="file" {...register('cover')} />
        </label>

        <label>
          All Images:
          <input type="file" {...register('imgAll')} />
        </label>

        <Button type="submit" variant={'contained'}>
          Send
        </Button>
      </form>
    </div>
  )
}
