import { createReducer, on } from "@ngrx/store"
import * as OrderActions from './order.actions'

export interface OrderState {
  billingDetails: any;
  paymentMethod:string | null
  order: any;
  error: any;
}

const initState: OrderState = {
  billingDetails: null,
  paymentMethod:'',
  order: null,
  error: null
}


export const orderReducer = createReducer(initState,
  on(OrderActions.setBillingDetails, (state: OrderState, action) => {
    return {
      ...state,
      billingDetails: action.billingDetails
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
  }),
  on(OrderActions.setPaymentMethod,(state:OrderState,action)=>{
    return{
      ...state,
      paymentMethod:action.paymentMethod
    }
  })
)
