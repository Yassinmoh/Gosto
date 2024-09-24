import { getSubTotal } from './../../../../store/Cart/cart.selectors';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ShippingState } from '../../../../store/Shipping/shipping.reducer';
import { combineLatest, map, Observable, of, take, tap } from 'rxjs';
import * as ShippingActions from '../../../../store/Shipping/shipping.actions'
import { getShippingAddress, getShippingCost } from '../../../../store/Shipping/shipping.selector';
import { ShippingType } from '../../../core/enums/ShippingTypes.enum';
import { AccordionModule } from 'primeng/accordion';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'Gosto-cart-totals',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AccordionModule, RouterModule],
  templateUrl: './cart-totals.component.html',
  styleUrl: './cart-totals.component.scss'
})
export class CartTotalsComponent implements OnInit {

  _store = inject(Store<ShippingState | CartState>);
  _fb = inject(FormBuilder);
  _toster = inject(ToastrService)
  _router = inject(Router)

  shippingCost$: Observable<number> = of(0);
  shippingAddress$!: Observable<{ country: string; state: string; city: string; postcode: string }>;
  shippingCostForm!: FormGroup;
  shippingAddressForm!: FormGroup;
  subtotal$: Observable<number> = of(0);
  total$: Observable<number> = of(0);


  shippingFormData = [
    { id: 'freeShipping', label: 'Free shipping', value: ShippingType.Free, cost: '00:00' },
    { id: 'localPickup', label: 'Local pickup', value: ShippingType.Local, cost: '10:00' },
    { id: 'flatRate', label: 'Flat rate', value: ShippingType.Flat, cost: '20:00' },
  ]

  ngOnInit(): void {
    this.initShipingCostForm()
    this.initShippingAddressForm()
    this.getUserSelection()
    this.getShippingCost()
    this.getShippingAddress()
    this.getSubtotal()
  }

  initShipingCostForm() {
    this.shippingCostForm = this._fb.group({
      shippingOption: ['', Validators.required]
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

  getShippingAddress() {
    this.shippingAddress$ = this._store.select(getShippingAddress).pipe(
      tap(address => this.shippingAddressForm.patchValue(address))
    )
  }

  updateAddress(event: Event) {
    event.preventDefault()
    const { city, state, postcode, country } = this.shippingAddressForm.value;
    this._store.dispatch(ShippingActions.setShippingAddress({ shippingAddress: { city: city, state: state, postcode: postcode, country: country } }))
  }

  getSubtotal() {
    this.subtotal$ = this._store.select(getSubTotal);
    this.total$ = combineLatest([this.subtotal$, this.shippingCost$]).pipe(
      map(([total, shippingCost]) => total + shippingCost)
    )
  }

  proceed() {
    let shippingFieldStatus = this.shippingCostForm.controls['shippingOption'].status
    this.subtotal$.pipe(take(1)).subscribe(value => {
      if (value == 0) {
        this._toster.error("You can't proceed, The cart is Empty");
      } else {
        if (shippingFieldStatus == 'INVALID') {
          this._toster.error("You can't proceed without chose shipping cost");
        } else {
          this._router.navigate(['/checkout'])
        }
      }
    })
  }
}
