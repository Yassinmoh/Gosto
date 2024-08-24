import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderState } from "./order.reducer";
import { ShippingState } from "../Shipping/shipping.reducer";
import { CartState } from "../Cart/cart.reducer";
import { Product } from "../../modules/core/models/product";


// Selectors for the feature states
const orderFeatureState = createFeatureSelector<OrderState>('Order');
const shippingFeatureState = createFeatureSelector<ShippingState>('Shipping');
const cartFeatureState = createFeatureSelector<CartState>('Cart');

// Selector for Payment Method
export const getPaymentMethod = createSelector(orderFeatureState, state => state.paymentMethod);

//Selector for items total
const getCartTotal  = createSelector(cartFeatureState, state => state.cartItems.reduce((acc, product) => (acc + product.price) * (product.quantity || 1), 0));
const getOrderedItems = createSelector(cartFeatureState,state => state.cartItems)
// Selector to get billing details including shipping cost and total
export const getOrderDetails = createSelector(
  [orderFeatureState, shippingFeatureState, getCartTotal ,getPaymentMethod,getOrderedItems],
  (orderState: OrderState, shippingState: ShippingState, total: number,paymentMethod:string | null,orderedItems: Product[]) => {
    const clonedItems = structuredClone(orderedItems);
    return {
      billingDetails: { ...orderState.billingDetails,orderNum:new Date().getTime().toString().slice(0,5),date: new Date().getDate() },
      shippingDetails: { cost: shippingState.cost, shippingAddress: shippingState.shippingAddress },
      total: total,
      orderdItems:clonedItems,
      paymentMethod: paymentMethod
    };
  }
);
export const getError = createSelector(orderFeatureState, state => state.error)
