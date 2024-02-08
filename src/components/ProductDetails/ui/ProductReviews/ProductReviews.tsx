import { ProductReview } from '../../../ProductReview/ProductReview'
import s from './ProductReviews.module.scss'
export const ProductReviews = () => {
  return (
    <div className={s.wrapper}>
      <ProductReview
        avatar={'https://i.pravatar.cc/300'}
        rating={4}
        userFrom={'London,UK'}
        userName={'Tom P. Howard'}
        review={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the redi 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining"
        }
      />
      <ProductReview
        avatar={'https://i.pravatar.cc/300'}
        rating={2}
        userFrom={'Detroit, MI'}
        userName={'Maverick Max'}
        review={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the redi 1500s, when an"
        }
      />
      <ProductReview
        avatar={'https://i.pravatar.cc/300'}
        rating={5}
        userFrom={'Cleveland, OH'}
        userName={'Robert A. Mahoney'}
        review={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the redi 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
    </div>
  )
}
