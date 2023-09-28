import { ProductDataType } from '../../services/productService'

export const returnPhotosToShow = (domainData: ProductDataType) => {
  const photos: string[] = []

  photos.push(domainData.cover.url)
  domainData.imgAll.forEach((img: any) => photos.push(img))

  return photos
}
