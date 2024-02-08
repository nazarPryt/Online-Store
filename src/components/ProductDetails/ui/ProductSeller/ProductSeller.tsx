import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import s from './ProductSeller.module.scss'

export const ProductSeller = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.userAboutBox}>
        <Avatar
          alt={'userName'}
          src={'https://i.pravatar.cc/300'}
          sx={{ width: 36, height: 36 }}
        />
        <div>
          <Typography sx={{ mb: 1 }} variant={'h5'}>
            Ridoy Rock
          </Typography>
          <Typography>London,United Kingdom</Typography>
          <Rating name="simple-controlled" value={5} readOnly />
        </div>
      </div>
      <div className={s.userInfoBox}>
        <Typography>
          <b>Products: </b>120
        </Typography>
        <Typography>
          <b>Category: </b>Mobile Phone, Sports, Gaming, Electronics
        </Typography>
        <Typography>
          <b>Tags: </b>Beer, Foamer
        </Typography>
      </div>
    </div>
  )
}
