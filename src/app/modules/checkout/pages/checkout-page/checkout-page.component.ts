import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { BillingDetailsComponent } from '../../components/billing-details/billing-details.component';
import { PreOrderInfoComponent } from '../../components/pre-order-info/pre-order-info.component';
import { Store } from '@ngrx/store';
import { OrderState } from '../../../../store/Order/order.reducer';
import { ShippingState } from '../../../../store/Shipping/shipping.reducer';
import * as OrderActions from '../../../../store/Order/order.actions'
import * as ShoppingActions from '../../../../store/Shipping/shipping.actions'

@Component({
  selector: 'Gosto-checkout-page',
  standalone: true,
  imports: [AccordionModule, ReactiveFormsModule, BillingDetailsComponent, PreOrderInfoComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent implements OnInit {

  _fb = inject(FormBuilder);
  _store = inject(Store<OrderState | ShippingState>);

  couponForm!: FormGroup;
  billingForm: FormGroup | null = null;
  shippingForm: FormGroup | null = null;
  isChecked = false;


  ngOnInit(): void {
    this.initCouponForm()
  }

  initCouponForm() {
    this.couponForm = this._fb.group({
      coupon: ['']
    })
  }

  applayCoupon(event: Event) {
    event.preventDefault()
  }

  onBillingFormUpdated(form: FormGroup) {
    this.billingForm = form
  }
  onShippingFormUpdated(form: FormGroup) {
    this.shippingForm = form
  }

  ontoggleShippingFormAccordion(value:any){
    this.isChecked = value
  }

  onPlaceOrder() {
    if (this.billingForm?.valid) {
      const billingValue = this.billingForm.value
      this._store.dispatch(OrderActions.setBillingDetails({billingDetails:billingValue}))
      if (this.isChecked && this.shippingForm?.valid) {
        const newShippingAddress = this.shippingForm.value
        this._store.dispatch(ShoppingActions.setShippingAddress({ shippingAddress: newShippingAddress }))
      }
      this._store.dispatch(OrderActions.placeOrder())
    }
  }
}
