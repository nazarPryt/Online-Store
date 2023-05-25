import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import s from './AddNewProductForm.module.scss'
import { MultipleSelect } from './components/MultipleSelect'

type Inputs = {
  title: string
  description: string
  available: boolean
  price: number
  oldPrice: number
  cover: string
  imgAll: string[]
  category: string[]
}

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
    available: yup.boolean().required(),
    price: yup.number().positive().required(),
    oldPrice: yup.number().positive().required(),
    cover: yup.string().required(),
    imgAll: yup.string().required(),
    category: yup.array().required(),
  })
  .required()

export const AddNewProductForm = () => {
  const { register, handleSubmit, watch, setValue } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })
  const selectValue = watch('category')
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
