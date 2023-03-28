import { instance } from './instance'

export const productService = {
  getSingleProduct(id: number) {
    return instance.get<SingleProductType>(`products/${id}`)
  },
}

///  Types   ///
export type SingleProductType = {
  data: SingleProductTypeData
  meta: {}
}
export type SingleProductTypeDataAttributes = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
  description: string
  price: number
}
export type SingleProductTypeData = {
  id: number
  attributes: SingleProductTypeDataAttributes
}

// export type ProductDataType = {
//   data: ProductDataTypeData[]
//   meta: ProductDataTypeMeta
// }
// export type ProductDataTypeDataAttributesCategoryDataAttributes = {
//   name: string
//   createdAt: string
//
//   updatedAt: string
//   publishedAt: string
// }
// export type ProductDataTypeDataAttributesCategoryData = {
//   id: number
//   attributes: ProductDataTypeDataAttributesCategoryDataAttributes
// }
// export type ProductDataTypeDataAttributesCategory = {
//   data: ProductDataTypeDataAttributesCategoryData
// }
// export type ProductDataTypeDataAttributesImgDataAttributesFormatsThumbnail = {
//   name: string
//   hash: string
//   ext: string
//   mime: string
//   path?: any
//   width: number
//   height: number
//   size: number
//   url: string
// }
// export type ProductDataTypeDataAttributesImgDataAttributesFormatsMedium = {
//   name: string
//   hash: string
//   ext: string
//   mime: string
//   path?: any
//   width: number
//   height: number
//   size: number
//   url: string
// }
// export type ProductDataTypeDataAttributesImgDataAttributesFormatsSmall = {
//   name: string
//   hash: string
//   ext: string
//   mime: string
//   path?: any
//   width: number
//   height: number
//   size: number
//   url: string
// }
// export type ProductDataTypeDataAttributesImgDataAttributesFormats = {
//   thumbnail: ProductDataTypeDataAttributesImgDataAttributesFormatsThumbnail
//   medium: ProductDataTypeDataAttributesImgDataAttributesFormatsMedium
//   small: ProductDataTypeDataAttributesImgDataAttributesFormatsSmall
// }
// export type ProductDataTypeDataAttributesImgDataAttributes = {
//   name: string
//   alternativeText?: any
//   caption?: any
//   width: number
//   height: number
//   formats: ProductDataTypeDataAttributesImgDataAttributesFormats
//   hash: string
//   ext: string
//   mime: string
//   size: number
//   url: string
//   previewUrl?: any
//   provider: string
//   provider_metadata?: any
//   createdAt: string
//   updatedAt: string
// }
// export type ProductDataTypeDataAttributesImgData = {
//   id: number
//   attributes: ProductDataTypeDataAttributesImgDataAttributes
// }
// export type ProductDataTypeDataAttributesImg = {
//   data: ProductDataTypeDataAttributesImgData[]
// }
// export type ProductDataTypeDataAttributes = {
//   createdAt: string
//   updatedAt: string
//   publishedAt: string
//   name: string
//   description: string
//   price: number
//   category: ProductDataTypeDataAttributesCategory
//   img: ProductDataTypeDataAttributesImg
// }
// export type ProductDataTypeData = {
//   id: number
//   attributes: ProductDataTypeDataAttributes
// }
// export type ProductDataTypeMetaPagination = {
//   page: number
//   pageSize: number
//   pageCount: number
//   total: number
// }
// export type ProductDataTypeMeta = {
//   pagination: ProductDataTypeMetaPagination
// }
