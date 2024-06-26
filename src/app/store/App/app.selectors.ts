import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reeducer";

const appFeatureState = createFeatureSelector<AppState>('App')
export const shoppingCartPopup = createSelector(appFeatureState , state => state.toggleShoppingCartPopup)
export const menuPopup = createSelector(appFeatureState , state => state.toggleMenuPopup)
export const wishlistPopup = createSelector(appFeatureState,state => state.toggleWishlistPopup)
export const getAppLang = createSelector(appFeatureState,state => state.Lang)
