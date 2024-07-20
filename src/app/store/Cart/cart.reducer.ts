import { state } from '@angular/animations';
import { createReducer, on } from "@ngrx/store"
import * as ProductsActions from './cart.actions'
import { CartItem } from "../../modules/core/models/CartItem"

export interface CartState {
  cartItems: CartItem[]
}

const initState: CartState = {
  cartItems: []
}


export const cartReducer = createReducer(initState,
  on(ProductsActions.addToCart, (state, action) => {
    const existingCartItem = state.cartItems.find(item => item.id === action.product.id);
    if (existingCartItem) {
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: (item.quantity || 1) + action.product.quantity }
            : item
        ),
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.product, quantity: 1 }],
      };
    }
  }),
  on(ProductsActions.removeFromCart, (state: CartState, action) => {
    return {
      ...state,
      cartItems: state.cartItems.filter(item => item.id !== action.product.id)
    }
  }),
  on(ProductsActions.resetCart, (state: CartState) => {
    return {
      ...state,
      cartItems: []
    }
  })
)
