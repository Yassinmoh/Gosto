import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { BillingDetailsComponent } from '../../components/billing-details/billing-details.component';
import { PreOrderInfoComponent } from '../../components/pre-order-info/pre-order-info.component';


@Component({
  selector: 'Gosto-checkout-page',
  standalone: true,
  imports: [AccordionModule, ReactiveFormsModule,BillingDetailsComponent,PreOrderInfoComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent implements OnInit {

  _fb = inject(FormBuilder);

  couponForm!: FormGroup;

  isChecked = false;

  toggleAccordion(event: any) {
    this.isChecked = event.target.checked;
    console.log("event.target.checked",event.target.checked);

  }


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
