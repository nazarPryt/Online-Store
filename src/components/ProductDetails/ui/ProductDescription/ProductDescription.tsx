import Typography from '@mui/material/Typography'
import s from './ProductDescription.module.scss'

export const ProductDescription = () => {
  return (
    <div className={s.wrapper}>
      <Typography variant="h5">Introduction </Typography>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries but also the on leap into electronic typesetting, remaining
        essentially unchanged. It wasn’t popularised in the 1960s with the
        release of Letraset sheets containing Lorem Ipsum passages, andei more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum to make a type specimen book.
      </p>
      <Typography variant="h5">Features : </Typography>
      <ul>
        <li>slim body with metal cover</li>
        <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
        <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
        <li>
          NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard,
          touchpad with gesture support
        </li>
      </ul>
    </div>
  )
}
