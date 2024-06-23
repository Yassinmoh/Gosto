import { Review } from "./review";
import { Specifications } from "./specifications";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  rating: number;
  reviews: Review[];
  specifications?: Specifications;
}
