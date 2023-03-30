import React from 'react'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CommentIcon from '@mui/icons-material/Comment'
import PersonIcon from '@mui/icons-material/Person'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'

import s from './NewsItem.module.scss'
export const NewsItem = () => {
  return (
    <Paper elevation={3} className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img src="https://picsum.photos/200/300" alt="news photo" />
      </div>
      <div className={s.content}>
        <div>
          <span>
            <PersonIcon color={'warning'} />
            By Admin
          </span>
          <span>
            <CommentIcon color={'warning'} />6 Comments
          </span>
        </div>

        <Link href={'/'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          explicabo, in itaque laborum nisi repudiandae ullam? Alias,
          dignissimos dolorem doloremque, doloribus eius eligendi exercitationem
          iure omnis reprehenderit rerum saepe soluta.
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          eligendi, facilis maiores molestias numquam placeat provident quo
          veritatis? A autem culpa dolores eius facere fugit impedit
          perspiciatis possimus similique soluta!lorem Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Ab autem consequatur deserunt
          eligendi esse fuga iure libero maiores, nam neque nostrum omnis
          provident quibusdam sint suscipit totam ut veritatis voluptas?
        </p>
        <Button variant="text" color={'info'} endIcon={<ArrowForwardIcon />}>
          View More
        </Button>
      </div>
    </Paper>
  )
}
