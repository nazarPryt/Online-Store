import React from 'react'

import 'swiper/css/bundle'

import { styled } from '@mui/material/styles'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { FeedbackItem } from './components/FeedbackItem/FeedbackItem'
import s from './CustomersFeedback.module.scss'

export const CustomersFeedbackMui = styled('section')(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
}))

export const CustomersFeedback = () => {
  const data = {
    avatar: 'https://i.pravatar.cc/300',
    name: 'Ridoy Rock',
    liveIn: 'London,Uk',
    rating: 3.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis laudantium magnam necessitatibus perferendis provident vero voluptatibus! Aliquid cupiditate excepturi exercitationem itaque magni nostrum odit qui quidem quos, sequi veritatis voluptates.',
  }

  return (
    <CustomersFeedbackMui className={s.wrapper}>
      <h1>Customers Feedback</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        navigation
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className={s.swiperWrapper}>
          <FeedbackItem
            avatar={data.avatar}
            text={data.text}
            name={data.name}
            liveIn={data.liveIn}
            rating={data.rating}
          />
        </SwiperSlide>
        <SwiperSlide className={s.swiperWrapper}>
          <FeedbackItem
            avatar={data.avatar}
            text={data.text}
            name={data.name}
            liveIn={data.liveIn}
            rating={data.rating}
          />
        </SwiperSlide>
        <SwiperSlide className={s.swiperWrapper}>
          <FeedbackItem
            avatar={data.avatar}
            text={data.text}
            name={data.name}
            liveIn={data.liveIn}
            rating={data.rating}
          />
        </SwiperSlide>
        <SwiperSlide className={s.swiperWrapper}>
          <FeedbackItem
            avatar={data.avatar}
            text={data.text}
            name={data.name}
            liveIn={data.liveIn}
            rating={data.rating}
          />
        </SwiperSlide>
        <SwiperSlide className={s.swiperWrapper}>
          <FeedbackItem
            avatar={data.avatar}
            text={data.text}
            name={data.name}
            liveIn={data.liveIn}
            rating={data.rating}
          />
        </SwiperSlide>
        <SwiperSlide className={s.swiperWrapper}>
          <FeedbackItem
            avatar={data.avatar}
            text={data.text}
            name={data.name}
            liveIn={data.liveIn}
            rating={data.rating}
          />
        </SwiperSlide>
      </Swiper>
    </CustomersFeedbackMui>
  )
}
