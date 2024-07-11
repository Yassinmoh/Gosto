import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reeducer";

const appFeatureState = createFeatureSelector<AppState>('App')

export const shoppingCartPopup = createSelector(appFeatureState , state => state.toggleShoppingCartPopup)
export const menuPopup = createSelector(appFeatureState , state => state.toggleMenuPopup)
export const wishlistPopup = createSelector(appFeatureState,state => state.toggleWishlistPopup)
export const filterPopup = createSelector(appFeatureState, state => state.toggleFilterPopup)
export const filterDialog = createSelector(appFeatureState, state => state.toggleFilterDialog)
export const getAppLang = createSelector(appFeatureState,state => state.Lang)
export const getViewMode = createSelector(appFeatureState,state => state.viewMode)
