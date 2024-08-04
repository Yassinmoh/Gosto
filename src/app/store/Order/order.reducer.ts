import { createReducer, on } from "@ngrx/store"
import * as OrderActions from './order.actions'

export interface OrderState {
  billingDetails: any;
  order: any;
  error: any;
}

const initState: OrderState = {
  billingDetails: null,
  order: null,
  error: null
}


export const orderReducer = createReducer(initState,
  on(OrderActions.setBillingDetails, (state: OrderState, action) => {
    return {
      ...state,
      order: action.billingDetails
    }
  }),
  on(OrderActions.placeOrder,(state:OrderState)=>{
    return{
      ...state
    }
  }),
  on(OrderActions.placeOrderSuccess,(state:OrderState,action)=>{
    return{
      ...state,
      order:action.order,
      error:null
    }
  }),
  on(OrderActions.placeOrderFailure,(state:OrderState,action)=>{
    return{
      ...state,
      error:action.error,
      order:null
    }
  })
)
