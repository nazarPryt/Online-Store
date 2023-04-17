import {
  OrderDomainType,
  OrdersDataType,
  OrdersDataTypeDataAttributesProducts,
} from '../../store/orders/OrderTypes'

export const returnDomainOrdersType = (
  data: OrdersDataType
): OrderDomainType[] => {
  const domainData: OrderDomainType[] = []

  data.data.forEach((order) => {
    const products: OrdersDataTypeDataAttributesProducts[] = []

    order.attributes.products.forEach((product) => products.push(product))
    domainData.push({ stripeId: order.attributes.stripeId, products })
  })

  return domainData
}
