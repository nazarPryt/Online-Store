import {
  AllProductsDataType,
  ProductDataType,
} from '../../services/servicesTypes'
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
    img:
      process.env.REACT_APP_LOCAL_URL +
      data.data.attributes.img.data[0].attributes.url,
    quantity: 1,
  }
}

export const returnDomainProducts = (
  data: AllProductsDataType
): DomainProductType[] => {
  const domainData: DomainProductType[] = []

  data.data.forEach((item) => {
    domainData.push({
      id: item.id,
      available: item.attributes.available,
      category: item.attributes.category.data.attributes.title,
      description: item.attributes.description,
      title: item.attributes.title,
      price: item.attributes.price,
      oldPrice: item.attributes.oldPrice,
      img:
        process.env.REACT_APP_LOCAL_URL +
        item.attributes.img.data[0].attributes.url,
      quantity: 1,
    })
  })

  return domainData
}
