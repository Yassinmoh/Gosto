import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { appReducer } from './App/app.reeducer';
import { cartReducer } from './Cart/cart.reducer';
import {localStorageSync } from 'ngrx-store-localstorage';
import { wishlistReducer } from './Wishlist/wishlist.reducer';
import { shippingReducer } from './Shipping/shipping.reducer';
import { orderReducer } from './Order/order.reducer';


export interface State {
  App: any;
  Cart: any,
  WishList:any,
  Shipping:any,
  Order:any
}

// Store and sync the state with local storage without any subscriptions
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['Cart','WishList','Shipping','Order'],
    rehydrate: true,
    checkStorageAvailability: true,
  })(reducer);
}



export const reducers: ActionReducerMap<State> = {
  App: appReducer,
  Cart: cartReducer,
  WishList:wishlistReducer,
  Shipping:shippingReducer,
  Order:orderReducer
};


export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
