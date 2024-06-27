import { Review } from "./review";
import { Specifications } from "./specifications";

export interface Product {
  id: number;
  name: string;
  long_description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
  rating: number;
  reviews: Review[];
  description:string[];
  specifications?: Specifications;
}
