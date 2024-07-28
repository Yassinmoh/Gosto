import { createReducer, on } from "@ngrx/store"
import * as ShippingActions from './shipping.actions'
import { ShippingType } from "../../modules/core/enums/ShippingTypes.enum"

export interface ShippingState {
  cost: number,
  shippingAddress: { country: string; state: string; city: string; postcode: string };
}

const initState = {
  cost: 0,
  shippingAddress: { country: '', state: '', city: '', postcode: '' }

}

const ShippingTypsMap = {
  [ShippingType.Flat]: 20,
  [ShippingType.Free]: 0,
  [ShippingType.Local]: 10,
}

export const shippingReducer = createReducer(initState,
  on(ShippingActions.setShippingCost, (state: ShippingState, action) => {
    const cost = ShippingTypsMap[action.shippingType] ?? 0
    return {
      ...state,
      cost:cost
    }
  }),
  on(ShippingActions.setShippingAddress,(state:ShippingState,action)=>{
    console.log(action.shippingAddress);

    return{
      ...state,
      shippingAddress:action.shippingAddress
    }
  })
)
