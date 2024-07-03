import { createAction, props } from "@ngrx/store";

export const toggleShoppingCartPopup = createAction('[App] toggle Shopping Cart Popup')
export const toggleMenuPopup = createAction('[App] toggle Menu Popup')
export const toggleWishlistPopup = createAction('[App] toggle Wishlist Popup')
export const toggleFilterPopup = createAction('[App] toggle Filter Popup')
export const setAppLang = createAction('[App] Change Language',props<{lang:string}>())
