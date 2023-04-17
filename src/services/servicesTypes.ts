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
export type ProductDataTypeDataAttributesCoverDataAttributesFormatsThumbnail = {
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
export type ProductDataTypeDataAttributesCoverDataAttributesFormatsSmall = {
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
export type ProductDataTypeDataAttributesCoverDataAttributesFormatsMedium = {
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
export type ProductDataTypeDataAttributesCoverDataAttributesFormats = {
  thumbnail: ProductDataTypeDataAttributesCoverDataAttributesFormatsThumbnail
  small: ProductDataTypeDataAttributesCoverDataAttributesFormatsSmall
  medium: ProductDataTypeDataAttributesCoverDataAttributesFormatsMedium
}
export type ProductDataTypeDataAttributesCoverDataAttributes = {
  name: string
  alternativeText?: any
  caption?: any
  width: number
  height: number
  formats: ProductDataTypeDataAttributesCoverDataAttributesFormats
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
export type ProductDataTypeDataAttributesCoverData = {
  id: number
  attributes: ProductDataTypeDataAttributesCoverDataAttributes
}
export type ProductDataTypeDataAttributesCover = {
  data: ProductDataTypeDataAttributesCoverData
}
export type ProductDataTypeDataAttributesImgAllDataAttributesFormatsThumbnail =
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
export type ProductDataTypeDataAttributesImgAllDataAttributesFormatsSmall = {
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
export type ProductDataTypeDataAttributesImgAllDataAttributesFormatsMedium = {
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
export type ProductDataTypeDataAttributesImgAllDataAttributesFormats = {
  thumbnail: ProductDataTypeDataAttributesImgAllDataAttributesFormatsThumbnail
  small: ProductDataTypeDataAttributesImgAllDataAttributesFormatsSmall
  medium: ProductDataTypeDataAttributesImgAllDataAttributesFormatsMedium
}
export type ProductDataTypeDataAttributesImgAllDataAttributes = {
  name: string
  alternativeText?: any
  caption?: any
  width: number
  height: number
  formats: ProductDataTypeDataAttributesImgAllDataAttributesFormats
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
export type ProductDataTypeDataAttributesImgAllData = {
  id: number
  attributes: ProductDataTypeDataAttributesImgAllDataAttributes
}
export type ProductDataTypeDataAttributesImgAll = {
  data: ProductDataTypeDataAttributesImgAllData[]
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
  cover: ProductDataTypeDataAttributesCover
  imgAll: ProductDataTypeDataAttributesImgAll
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
export type AllProductsDataTypeDataAttributesCoverDataAttributesFormatsThumbnail =
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
export type AllProductsDataTypeDataAttributesCoverDataAttributesFormatsSmall = {
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
export type AllProductsDataTypeDataAttributesCoverDataAttributesFormatsMedium =
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
export type AllProductsDataTypeDataAttributesCoverDataAttributesFormatsLarge = {
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
export type AllProductsDataTypeDataAttributesCoverDataAttributesFormats = {
  thumbnail: AllProductsDataTypeDataAttributesCoverDataAttributesFormatsThumbnail
  small: AllProductsDataTypeDataAttributesCoverDataAttributesFormatsSmall
  medium: AllProductsDataTypeDataAttributesCoverDataAttributesFormatsMedium
  large: AllProductsDataTypeDataAttributesCoverDataAttributesFormatsLarge
}
export type AllProductsDataTypeDataAttributesCoverDataAttributes = {
  name: string
  alternativeText?: any
  caption?: any
  width: number
  height: number
  formats: AllProductsDataTypeDataAttributesCoverDataAttributesFormats
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
export type AllProductsDataTypeDataAttributesCoverData = {
  id: number
  attributes: AllProductsDataTypeDataAttributesCoverDataAttributes
}
export type AllProductsDataTypeDataAttributesCover = {
  data: AllProductsDataTypeDataAttributesCoverData
}
export type AllProductsDataTypeDataAttributesImgAllDataAttributesFormatsThumbnail =
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
export type AllProductsDataTypeDataAttributesImgAllDataAttributesFormatsLarge =
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
export type AllProductsDataTypeDataAttributesImgAllDataAttributesFormatsMedium =
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
export type AllProductsDataTypeDataAttributesImgAllDataAttributesFormatsSmall =
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
export type AllProductsDataTypeDataAttributesImgAllDataAttributesFormats = {
  thumbnail: AllProductsDataTypeDataAttributesImgAllDataAttributesFormatsThumbnail
  large: AllProductsDataTypeDataAttributesImgAllDataAttributesFormatsLarge
  medium: AllProductsDataTypeDataAttributesImgAllDataAttributesFormatsMedium
  small: AllProductsDataTypeDataAttributesImgAllDataAttributesFormatsSmall
}
export type AllProductsDataTypeDataAttributesImgAllDataAttributes = {
  name: string
  alternativeText?: any
  caption?: any
  width: number
  height: number
  formats: AllProductsDataTypeDataAttributesImgAllDataAttributesFormats
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
export type AllProductsDataTypeDataAttributesImgAllData = {
  id: number
  attributes: AllProductsDataTypeDataAttributesImgAllDataAttributes
}
export type AllProductsDataTypeDataAttributesImgAll = {
  data: AllProductsDataTypeDataAttributesImgAllData[]
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
  cover: AllProductsDataTypeDataAttributesCover
  imgAll: AllProductsDataTypeDataAttributesImgAll
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
