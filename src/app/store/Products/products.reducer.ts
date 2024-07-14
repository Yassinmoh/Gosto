import { createReducer, on } from "@ngrx/store"
import { Product } from "../../modules/core/models/product"
import * as ProductsActions from './products.actions'

export interface ProductState {
  cartItems: Product[]
}

const initState: ProductState = {
  cartItems: []
}


export const productsReducer = createReducer(initState,
  on(ProductsActions.addToCart, (state, action) => ({
    ...state,
    cartItems: [...state.cartItems, action.product]
  })),
  on(ProductsActions.removeFromCart, (state: ProductState, action) => {
    return {
      ...state,
      cartItems: state.cartItems.filter(item => item.id !== action.product.id)
    }
  }),
  on(ProductsActions.resetCart, (state: ProductState) => {
    return {
      ...state,
      cartItems: []
    }
  })
)
