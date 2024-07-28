import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShippingState } from "./shipping.reducer";


const ShippingFeatureState = createFeatureSelector<ShippingState>('Shipping');

export const getShippingCost = createSelector(ShippingFeatureState, state => state.cost);
