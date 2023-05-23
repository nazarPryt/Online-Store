export const returnDomainProductType = (data: any) => {
  const imgAll: string[] = []

  data.data.attributes.imgAll.data.forEach((picture: any) =>
    imgAll.push(picture.attributes.url)
  )

  return {
    id: data.data.id,
    available: data.data.attributes.available,
    category: data.data.attributes.category.data.attributes.title,
    description: data.data.attributes.description,
    title: data.data.attributes.title,
    price: data.data.attributes.price,
    oldPrice: data.data.attributes.oldPrice,
    cover: data.data.attributes.cover.data.attributes.url,
    quantity: 1,
    imgAll,
  }
}

export const returnDomainProducts = (data: any) => {
  const domainData: any = []

  data.data.forEach((item: any) => {
    const imgAll: string[] = []

    item.attributes.imgAll.data.forEach((img: any) =>
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
      cover: item.attributes.cover.data.attributes.url,
      quantity: 1,
      imgAll,
    })
  })

  return domainData
}
