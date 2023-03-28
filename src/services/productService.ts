import { instance } from './instance'

export const productService = {
  getSingleProduct(id: number) {
    return instance.get<ProductDataType>(`/api/products/${id}`, {
      params: { populate: '*' },
    })
  },
}

///  Types   ///

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
