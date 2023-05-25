import React, { useState } from 'react'

import Modal from '@mui/material/Modal'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { AddNewProductForm } from '../AddNewProductForm/AddNewProductForm'

import s from './AddNewProduct.module.scss'

export const FormBox = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}))
export const AddNewProduct = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button onClick={handleOpen}>AddNewProduct</button>
      <Modal open={open} onClose={handleClose}>
        <FormBox className={s.wrapper}>
          <Typography component="h2">Add new product form</Typography>
          <AddNewProductForm />
        </FormBox>
      </Modal>
    </div>
  )
}
