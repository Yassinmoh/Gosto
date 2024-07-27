import { createAction, props } from "@ngrx/store";
import { Product } from "../../modules/core/models/product";


export const addToCart = createAction('[Cart] Add To Cart', props<{ product: Product & { quantity: number }}>());
export const removeFromCart = createAction('[Cart] Remove From Cart', props<{ product: Product }>());
export const resetCart = createAction('[Cart] Reset Cart');
export const incrementQuantity = createAction('[Cart] Increment Product Quantity',props<{productId:number}>())
export const decrementQuantity = createAction('[Cart] Decrement Product Quantity',props<{productId:number}>())
