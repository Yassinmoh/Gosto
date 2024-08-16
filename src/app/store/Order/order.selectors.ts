import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderState } from "./order.reducer";
import { ShippingState } from "../Shipping/shipping.reducer";
import { CartState } from "../Cart/cart.reducer";


// Selectors for the feature states
const orderFeatureState = createFeatureSelector<OrderState>('Order');
const shippingFeatureState = createFeatureSelector<ShippingState>('Shipping');
const cartFeatureState = createFeatureSelector<CartState>('Cart');

// Selector for Payment Method
export const getPaymentMethod = createSelector(orderFeatureState, state => state.paymentMethod);

//Selector for items total
export const getCartTotal  = createSelector(cartFeatureState, state => state.cartItems.reduce((acc, product) => (acc + product.price) * (product.quantity || 1), 0));

// Selector to get billing details including shipping cost and total
export const getOrderDetails = createSelector(
  [orderFeatureState, shippingFeatureState, getCartTotal ,getPaymentMethod ],
  (orderState: OrderState, shippingState: ShippingState, total: number,paymentMethod:string | null) => {
    return {
      billingDetails: { ...orderState.billingDetails,orderNum:new Date().getTime().toString().slice(0,5),date: new Date().getDate() },
      shippingDetails: { cost: shippingState.cost, shippingAddress: shippingState.shippingAddress },
      total: total,
      paymentMethod: paymentMethod
    };
  }
);
export const getError = createSelector(orderFeatureState, state => state.error)
