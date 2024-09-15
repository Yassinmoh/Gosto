import { Review } from "./review";
import { Specifications } from "./specifications";

export interface Product {
  id: number
  name: string
  long_description: string
  short_description: string
  price: number
  sku: string
  hasSale: boolean
  sale: number
  imageUrl: string
  category: string[]
  brand: string
  stock: number
  rating: number
  reviews: Review[]
  specifications: Specifications
  description: string[]
  releaseDate:number
  popularity:number
}
