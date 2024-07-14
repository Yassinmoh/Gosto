import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { appReducer } from './App/app.reeducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  App:appReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
