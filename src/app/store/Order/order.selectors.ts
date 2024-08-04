import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderState } from "./order.reducer";

const orderFeatureState = createFeatureSelector<OrderState>('Order');

export const getOrder = createSelector(orderFeatureState,state => state.order)
export const getBillingDetails = createSelector(orderFeatureState,state => state.billingDetails)
export const getError = createSelector(orderFeatureState,state => state.error)
