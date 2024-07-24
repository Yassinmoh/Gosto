import { createReducer, on } from "@ngrx/store";
import { Product } from "../../modules/core/models/product";
import * as wishListActions from './wishlist.actions'

export interface WishlistState {
  wishlistItems: Product[]
}

const initState: WishlistState = {
  wishlistItems: []
}

export const wishlistReducer = createReducer(initState,
  on(wishListActions.addToWishlist, (state: WishlistState, action) => {
    const existingInWishlist = state.wishlistItems.find((item: Product) => item.id === action.product.id);
    if (!existingInWishlist) {
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.product]
      }
    } else {
      return state
    }
  }),
  on(wishListActions.removeFromWishlist, (state: WishlistState, action) => {
    return {
      ...state,
      wishlistItems: state.wishlistItems.filter(item => item.id !== action.product.id)
    }
  })
)
