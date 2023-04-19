import { DomainProductType } from '../../store/cart/cart.slice'

export const returnPhotosToShow = (domainData: DomainProductType) => {
  const photos: string[] = []

  photos.push(domainData.cover)
  domainData.imgAll.forEach((img) => photos.push(img))

  return photos
}
