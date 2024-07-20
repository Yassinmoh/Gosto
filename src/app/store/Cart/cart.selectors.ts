import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";


const cartFeatureState = createFeatureSelector<CartState>('Cart');

export const getCartItems = createSelector(cartFeatureState,state => state.cartItems)
export const getCartItemsCount = createSelector(cartFeatureState,state => state.cartItems.length)
  // Get Total price * quantity of items
export const getTotal = createSelector(cartFeatureState,state => state.cartItems.reduce((acc,product)=> (acc + product.price) * (product.quantity || 1),0))
