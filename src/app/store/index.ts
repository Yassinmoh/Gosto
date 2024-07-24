import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { appReducer } from './App/app.reeducer';
import { cartReducer } from './Cart/cart.reducer';
import {localStorageSync } from 'ngrx-store-localstorage';
import { wishlistReducer } from './Wishlist/wishlist.reducer';


export interface State {
  App: any;
  Cart: any,
  WishList:any
}

// Store and sync the state with local storage without any subscriptions
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['Cart','WishList'],
    rehydrate: true,
    checkStorageAvailability: true,
  })(reducer);
}



export const reducers: ActionReducerMap<State> = {
  App: appReducer,
  Cart: cartReducer,
  WishList:wishlistReducer
};


export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
