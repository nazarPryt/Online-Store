///////////////////   OrderDomainType    /////////////////////

export type OrderDomainType = {
  // createdAt: string
  stripeId: string
  products: OrdersDataTypeDataAttributesProducts[]
}

///////////   OrderResponseDataType ///////////////////////

export type OrdersDataType = {
  data: OrdersDataTypeData[]
  meta: OrdersDataTypeMeta
}
export type OrdersDataTypeDataAttributesProducts = {
  id: number
  available: boolean
  category: string
  description: string
  title: string
  price: number
  oldPrice: number
  cover: string
  quantity: number
  imgAll: string[]
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
