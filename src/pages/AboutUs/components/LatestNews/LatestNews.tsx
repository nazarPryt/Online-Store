import React from 'react'

import Box from '@mui/material/Box'

import { NewsItem } from '../NewsItem/NewsItem'

import s from './LatestNews.module.scss'
export const LatestNews = () => {
  return (
    <section className={s.wrapper}>
      <h2>My Latest News</h2>
      <Box className={s.inner}>
        <NewsItem />
        <NewsItem />
      </Box>
    </section>
  )
}
