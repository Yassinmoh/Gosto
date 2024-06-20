import { createReducer, on } from "@ngrx/store";
import * as appActions from './app.actions'
export interface AppState {
  toggleShoppingCartPopup: boolean;
}

const initState = {
  toggleShoppingCartPopup: false,
}


export const appReducer = createReducer(initState,
  on(appActions.toggleShoppingCartPopup,(state:AppState)=>{
    return{
      ...state,
      toggleShoppingCartPopup:!state.toggleShoppingCartPopup
    }
  })
)
