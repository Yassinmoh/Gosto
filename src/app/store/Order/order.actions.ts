import { createAction, props } from "@ngrx/store";

export const setBillingDetails = createAction('[Order] Set Billing Details',props<{ billingDetails: any }>());
export const setPaymentMethod = createAction('[Order] Set Payment Method',props<{ paymentMethod: string }>());

export const placeOrder = createAction('[Order] Place Order');
export const placeOrderSuccess = createAction('[Order] Place Order Success',props<{ order: any }>());
export const placeOrderFailure = createAction('[Order] Place Order Failure',props<{ error: any }>());
