import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { BillingDetailsComponent } from '../../component/billing-details/billing-details.component';


@Component({
  selector: 'Gosto-checkout-page',
  standalone: true,
  imports: [AccordionModule, ReactiveFormsModule,BillingDetailsComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent implements OnInit {

  _fb = inject(FormBuilder);

  couponForm!: FormGroup;

  ngOnInit(): void {
    this.initCouponForm()
  }

  initCouponForm() {
    this.couponForm = this._fb.group({
      coupon: ['']
    })
  }

  applayCoupon(event:Event){
    event.preventDefault()
  }
}
