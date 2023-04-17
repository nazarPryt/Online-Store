//////////////////  ProductDataType   //////////////////////////

export type ProductDataType = {
  data: ProductDataTypeData
  meta: ProductDataTypeMeta
}
export type ProductDataTypeDataAttributesCategoryDataAttributes = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
}
export type ProductDataTypeDataAttributesCategoryData = {
  id: number
  attributes: ProductDataTypeDataAttributesCategoryDataAttributes
}
export type ProductDataTypeDataAttributesCategory = {
  data: ProductDataTypeDataAttributesCategoryData
}
export type ProductDataTypeDataAttributesImgDataAttributesFormatsThumbnail = {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}
export type ProductDataTypeDataAttributesImgDataAttributesFormatsSmall = {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}
export type ProductDataTypeDataAttributesImgDataAttributesFormatsMedium = {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}
export type ProductDataTypeDataAttributesImgDataAttributesFormats = {
  thumbnail: ProductDataTypeDataAttributesImgDataAttributesFormatsThumbnail
  small: ProductDataTypeDataAttributesImgDataAttributesFormatsSmall
  medium: ProductDataTypeDataAttributesImgDataAttributesFormatsMedium
}
export type ProductDataTypeDataAttributesImgDataAttributes = {
  name: string
  alternativeText?: any
  caption?: any
  width: number
  height: number
  formats: ProductDataTypeDataAttributesImgDataAttributesFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: string
  updatedAt: string
}
export type ProductDataTypeDataAttributesImgData = {
  id: number
  attributes: ProductDataTypeDataAttributesImgDataAttributes
}
export type ProductDataTypeDataAttributesImg = {
  data: ProductDataTypeDataAttributesImgData[]
}
export type ProductDataTypeDataAttributes = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  description: string
  price: number
  title: string
  available: boolean
  oldPrice: number
  category: ProductDataTypeDataAttributesCategory
  img: ProductDataTypeDataAttributesImg
}
export type ProductDataTypeData = {
  id: number
  attributes: ProductDataTypeDataAttributes
}
export type ProductDataTypeMeta = {}

///////////////    AllProductsDataType   //////////////////////////////
export type AllProductsDataType = {
  data: AllProductsDataTypeData[]
  meta: AllProductsDataTypeMeta
}
export type AllProductsDataTypeDataAttributesCategoryDataAttributes = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
}
export type AllProductsDataTypeDataAttributesCategoryData = {
  id: number
  attributes: AllProductsDataTypeDataAttributesCategoryDataAttributes
}
export type AllProductsDataTypeDataAttributesCategory = {
  data: AllProductsDataTypeDataAttributesCategoryData
}
export type AllProductsDataTypeDataAttributesImgDataAttributesFormatsThumbnail =
  {
    name: string
    hash: string
    ext: string
    mime: string
    path?: any
    width: number
    height: number
    size: number
    url: string
  }
export type AllProductsDataTypeDataAttributesImgDataAttributesFormatsMedium = {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}
export type AllProductsDataTypeDataAttributesImgDataAttributesFormatsSmall = {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}
export type AllProductsDataTypeDataAttributesImgDataAttributesFormats = {
  thumbnail: AllProductsDataTypeDataAttributesImgDataAttributesFormatsThumbnail
  medium: AllProductsDataTypeDataAttributesImgDataAttributesFormatsMedium
  small: AllProductsDataTypeDataAttributesImgDataAttributesFormatsSmall
}
export type AllProductsDataTypeDataAttributesImgDataAttributes = {
  name: string
  alternativeText?: any
  caption?: any
  width: number
  height: number
  formats: AllProductsDataTypeDataAttributesImgDataAttributesFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: string
  updatedAt: string
}
export type AllProductsDataTypeDataAttributesImgData = {
  id: number
  attributes: AllProductsDataTypeDataAttributesImgDataAttributes
}
export type AllProductsDataTypeDataAttributesImg = {
  data: AllProductsDataTypeDataAttributesImgData[]
}
export type AllProductsDataTypeDataAttributes = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  description: string
  price: number
  title: string
  available: boolean
  oldPrice: number
  category: AllProductsDataTypeDataAttributesCategory
  img: AllProductsDataTypeDataAttributesImg
}
export type AllProductsDataTypeData = {
  id: number
  attributes: AllProductsDataTypeDataAttributes
}
export type AllProductsDataTypeMetaPagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
export type AllProductsDataTypeMeta = {
  pagination: AllProductsDataTypeMetaPagination
}
