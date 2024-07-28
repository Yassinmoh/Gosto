import { createAction, props } from "@ngrx/store";
import { ShippingType } from "../../modules/core/enums/ShippingTypes.enum";


export const setShippingCost = createAction('[Shipping] Set Shipping Cost',props<{shippingType:ShippingType }>())
export const setShippingAddress = createAction('[Shipping] Set Shipping Address',props<{shippingAddress:{ country: string; state: string; city: string; postcode: string } }>())
