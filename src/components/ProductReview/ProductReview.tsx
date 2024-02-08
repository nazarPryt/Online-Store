import Rating from '@mui/material/Rating'
import { useState } from 'react'
import s from './ProductReview.module.scss'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
type ProductReviewType = {
  avatar: string
  userName: string
  userFrom: string
  review: string
  rating: number
}
export const ProductReview = ({
  avatar,
  review,
  rating,
  userName,
  userFrom,
}: ProductReviewType) => {
  return (
    <div>
      <div className={s.header}>
        <div className={s.userAboutBox}>
          <Avatar alt={userName} src={avatar} sx={{ width: 36, height: 36 }} />
          <div>
            <Typography variant={'h5'}>{userName}</Typography>
            <Typography>{userFrom}</Typography>
          </div>
        </div>
        <Rating name="simple-controlled" value={rating} readOnly />
      </div>
      <p>{review}</p>
    </div>
  )
}
