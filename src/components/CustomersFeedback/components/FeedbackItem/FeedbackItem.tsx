import React from 'react'

import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import { styled } from '@mui/material/styles'

import s from './FeedbackItem.module.scss'

export const FeedbackItemMui = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
}))

type FeedbackItemType = {
  avatar: string
  name: string
  liveIn: string
  rating: number
  text: string
}
export const FeedbackItem = (props: FeedbackItemType) => {
  return (
    <FeedbackItemMui className={s.wrapper}>
      <Rating value={props.rating} readOnly precision={0.5} size="medium" />
      <p>{props.text}</p>
      <div className={s.avatarWrapper}>
        <Avatar
          alt="Remy Sharp"
          src={props.avatar}
          sx={{ width: 56, height: 56 }}
        />
        <div>
          <h4>{props.name}</h4>
          <span>{props.liveIn}</span>
        </div>
      </div>
    </FeedbackItemMui>
  )
}
