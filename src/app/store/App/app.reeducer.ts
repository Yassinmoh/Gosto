import { createReducer, on } from "@ngrx/store";
import * as appActions from './app.actions'
import { environment } from "../../../environment/environment";
import { Lang } from "../../modules/core/enums/lang.enum";
export interface AppState {
  toggleShoppingCartPopup: boolean;
  Lang: string | null;
}

const initState = {
  toggleShoppingCartPopup: false,
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
  on(appActions.setAppLang,(state:AppState,action)=>{
    return {
      ...state,
      Lang:action.lang
    }
  })
)
