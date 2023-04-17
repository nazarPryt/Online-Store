import {
  AllProductsDataType,
  ProductDataType,
} from '../../services/servicesTypes'
import { DomainProductType } from '../../store/cart/cart.slice'

export const returnDomainProductType = (
  data: ProductDataType
): DomainProductType => {
  const imgAll: string[] = []

  data.data.attributes.imgAll.data.forEach((picture) =>
    imgAll.push(process.env.REACT_APP_BASE_URL + picture.attributes.url)
  )

  return {
    id: data.data.id,
    available: data.data.attributes.available,
    category: data.data.attributes.category.data.attributes.title,
    description: data.data.attributes.description,
    title: data.data.attributes.title,
    price: data.data.attributes.price,
    oldPrice: data.data.attributes.oldPrice,
    cover:
      process.env.REACT_APP_BASE_URL +
      data.data.attributes.cover.data.attributes.url,
    quantity: 1,
    imgAll,
  }
}

export const returnDomainProducts = (
  data: AllProductsDataType
): DomainProductType[] => {
  const domainData: DomainProductType[] = []

  data.data.forEach((item) => {
    const imgAll: string[] = []

    item.attributes.imgAll.data.forEach((img) =>
      imgAll.push(img.attributes.url)
    )

    domainData.push({
      id: item.id,
      available: item.attributes.available,
      category: item.attributes.category.data.attributes.title,
      description: item.attributes.description,
      title: item.attributes.title,
      price: item.attributes.price,
      oldPrice: item.attributes.oldPrice,
      cover:
        process.env.REACT_APP_BASE_URL +
        item.attributes.cover.data.attributes.url,
      quantity: 1,
      imgAll,
    })
  })

  return domainData
}
