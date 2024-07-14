import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { appReducer } from './App/app.reeducer';
import { productsReducer } from './Products/products.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  App:appReducer,
  Product:productsReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
