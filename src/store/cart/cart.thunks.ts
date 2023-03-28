/// types  ///
import { SingleProductType } from '../../services/productService'

export type CartProductType = SingleProductType & {
  quantity: number
}
