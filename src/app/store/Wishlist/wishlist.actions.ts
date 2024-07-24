import { createAction, props } from "@ngrx/store";
import { Product } from "../../modules/core/models/product";


export const addToWishlist = createAction('[WishList] Add To Wishlist',props<{product:Product}>());
export const removeFromWishlist = createAction('[WishList] Remove From Wishlist',props<{product:Product}>());
export const resetWishlist = createAction('[WishList] Reset Wishlist');
export const toggleAddtoWishlist =createAction('[WishList] Toggle Add To Wishlist',props<{product:Product}>());
