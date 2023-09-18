import { Dispatch } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const handleServerNetworkError = (e: any, dispatch: Dispatch) => {
  const err = e as Error | AxiosError<{ error: string }>

  if (axios.isAxiosError(err)) {
    const error = err.response?.data.error || err.message

    toast.error(error)
  } else {
    toast.error(err.message)
  }
  toast.error('failed')
}
