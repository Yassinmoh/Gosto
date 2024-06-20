import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reeducer";

const appFeatureState = createFeatureSelector<AppState>('App')
export const shoppingCartPopup = createSelector(appFeatureState , state => state.toggleShoppingCartPopup)
