import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ShippingState } from '../../../../store/Shipping/shipping.reducer';
import { Observable, of } from 'rxjs';
import * as ShippingActions from '../../../../store/Shipping/shipping.actions'
import { getShippingCost } from '../../../../store/Shipping/shipping.selector';
import { ShippingType } from '../../../core/enums/ShippingTypes.enum';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'Gosto-cart-totals',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AccordionModule],
  templateUrl: './cart-totals.component.html',
  styleUrl: './cart-totals.component.scss'
})
export class CartTotalsComponent implements OnInit {

  _store = inject(Store<ShippingState>);
  _fb = inject(FormBuilder);

  shippingCost$: Observable<number> = of(0);
  shippingCostForm!: FormGroup;
  shippingAddressForm!: FormGroup;


  formData = [
    { id: 'flatRate', label: 'Flat rate', value: ShippingType.Flat, cost: '20:00' },
    { id: 'freeShipping', label: 'Free shipping', value: ShippingType.Free, cost: '00:00' },
    { id: 'localPickup', label: 'Local pickup', value: ShippingType.Local, cost: '10:00' },
  ]

  ngOnInit(): void {
    this.initShopingCostForm()
    this.getUserSelection()
    this.getShippingCost()
  }

  initShopingCostForm() {
    this.shippingCostForm = this._fb.group({
      shippingOption: ['']
    })
  }

  initShippingAddressForm() {
    this.shippingAddressForm = this._fb.group({
      country: [''],
      state: [''],
      city: [''],
      postcode: [''],
    })
  }

  getUserSelection() {
    this.shippingCostForm.get("shippingOption")?.valueChanges.subscribe(res => {
      this._store.dispatch(ShippingActions.setShippingCost({ shippingType: res }))
    })
  }

  getShippingCost() {
    this.shippingCost$ = this._store.select(getShippingCost)
  }

}
