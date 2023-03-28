import { ProductDataType } from '../../services/productService'
import { DomainProductType } from '../../store/cart/cart.slice'

export const returnDomainProductType = (
  data: ProductDataType
): DomainProductType => {
  return {
    id: data.data.id,
    available: data.data.attributes.available,
    category: data.data.attributes.category.data.attributes.title,
    description: data.data.attributes.description,
    title: data.data.attributes.title,
    price: data.data.attributes.price,
    oldPrice: data.data.attributes.oldPrice,
    img: data.data.attributes.img.data[0].attributes.url,
    quantity: 1,
  }
}
