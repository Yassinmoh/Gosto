import { createAction, props } from "@ngrx/store";
import { Product } from "../../modules/core/models/product";


export const addToCart = createAction('[Product] Add To Cart', props<{ product: Product }>());
export const removeFromCart = createAction('[Product] Remove From Cart', props<{ product: Product }>());
export const resetCart = createAction('[Product] Reset Cart');
