import { createReducer } from "@ngrx/store";
import { Product } from "../../modules/core/models/product";


export interface Wishlist {
  wishlistItems:Product[]
}

const initState ={
  wishlistItems:[]
}

export const wishlistReducer= createReducer(initState)
