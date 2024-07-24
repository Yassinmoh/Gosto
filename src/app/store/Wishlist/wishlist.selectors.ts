import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WishlistState } from "./wishlist.reducer";

const FeatureWishlistState = createFeatureSelector<WishlistState>('WishList');

export const wishListItems = createSelector(FeatureWishlistState,state => state.wishlistItems)

export const wishListItemsCount = createSelector(FeatureWishlistState,state => state.wishlistItems.length)
