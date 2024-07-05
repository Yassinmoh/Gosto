import { createReducer, on } from "@ngrx/store";
import * as appActions from './app.actions'
import { environment } from "../../../environment/environment";
import { Lang } from "../../modules/core/enums/lang.enum";
export interface AppState {
  toggleShoppingCartPopup: boolean;
  toggleMenuPopup: boolean;
  toggleWishlistPopup: boolean;
  toggleFilterPopup: boolean;
  toggleFilterDialog: boolean;
  Lang: string | null;
}

const initState = {
  toggleShoppingCartPopup: false,
  toggleMenuPopup: false,
  toggleWishlistPopup: false,
  toggleFilterPopup: false,
  toggleFilterDialog:false,
  Lang: localStorage.getItem(environment.Storage.Lang)
      ? localStorage.getItem(environment.Storage.Lang)
      : Lang.English
}


export const appReducer = createReducer(initState,
  on(appActions.toggleShoppingCartPopup, (state: AppState) => {
    return {
      ...state,
      toggleShoppingCartPopup: !state.toggleShoppingCartPopup
    }
  }),
  on(appActions.toggleMenuPopup,(state:AppState)=>{
    return{
      ...state,
      toggleMenuPopup:!state.toggleMenuPopup
    }
  }),
  on(appActions.toggleWishlistPopup,(state:AppState)=>{
    return {
      ...state,
      toggleWishlistPopup:!state.toggleWishlistPopup
    }
  }),
  on(appActions.toggleFilterPopup,(state:AppState)=>{
    return{
      ...state,
      toggleFilterPopup:!state.toggleFilterPopup
    }
  }),
  on(appActions.toggleFilterDialog,(state:AppState)=>{
    return {
      ...state,
      toggleFilterDialog:!state.toggleFilterDialog
    }
  }),
  on(appActions.setAppLang,(state:AppState,action)=>{
    return {
      ...state,
      Lang:action.lang
    }
  })
)
