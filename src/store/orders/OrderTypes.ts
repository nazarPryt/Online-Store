///////////////////   OrderDomainType    /////////////////////

export type OrderDomainType = {
  stripeId: string
  products: OrdersDataTypeDataAttributesProducts[]
}

///////////   OrderResponseDataType ///////////////////////

export type OrdersDataType = {
  data: OrdersDataTypeData[]
  meta: OrdersDataTypeMeta
}
export type OrdersDataTypeDataAttributesProducts = {
  oldPrice: number
  category: string
  description: string
  price: number
  title: string
  id: number
  quantity: number
  available: boolean
  img: string
}
export type OrdersDataTypeDataAttributes = {
  stripeId: string
  products: OrdersDataTypeDataAttributesProducts[]
  createdAt: string
  updatedAt: string
  publishedAt: string
}
export type OrdersDataTypeData = {
  id: number
  attributes: OrdersDataTypeDataAttributes
}
export type OrdersDataTypeMetaPagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
export type OrdersDataTypeMeta = {
  pagination: OrdersDataTypeMetaPagination
}
