import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AccordionModule } from 'primeng/accordion';
import { ShippingState } from '../../../../store/Shipping/shipping.reducer';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { combineLatest, map, Observable } from 'rxjs';
import { ShippingType } from '../../../core/enums/ShippingTypes.enum';
import { getShippingCost } from '../../../../store/Shipping/shipping.selector';
import { CartItem } from '../../../core/models/CartItem';
import { getCartItems, getSubTotal } from '../../../../store/Cart/cart.selectors';
import * as ShippingActions from '../../../../store/Shipping/shipping.actions'


@Component({
  selector: 'Gosto-pre-order-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AccordionModule, RouterModule],
  templateUrl: './pre-order-info.component.html',
  styleUrl: './pre-order-info.component.scss'
})
export class PreOrderInfoComponent implements OnInit {

  @Output() placeOrder = new EventEmitter<void>();

  _store = inject(Store<ShippingState | CartState>);
  _fb = inject(FormBuilder);

  total$!: Observable<number>;
  subtotal$!: Observable<number>;
  shippingCost$!: Observable<number>;
  shippingCostForm!: FormGroup
  cartItems$!: Observable<CartItem[]>;
  shippingFormData = [
    { id: 'flatRate', label: 'Flat rate', value: ShippingType.Flat, cost: '20:00' },
    { id: 'freeShipping', label: 'Free shipping', value: ShippingType.Free, cost: '00:00' },
    { id: 'localPickup', label: 'Local pickup', value: ShippingType.Local, cost: '10:00' },
  ]


  ngOnInit(): void {
    this.initShippingCostForm();
    this.getShippingCost();
    this.getCartItems();
    this.getCartSubTotal();
    this.getUserSelection();
    this.getTotal();

  }

  initShippingCostForm() {
    this.shippingCostForm = this._fb.group({
      shippingOption: ['']
    })
  }

  getShippingCost() {
    this.shippingCost$ = this._store.select(getShippingCost)
  }

  getCartItems() {
    this.cartItems$ = this._store.select(getCartItems)
  }

  getCartSubTotal() {
    this.subtotal$ = this._store.select(getSubTotal)
  }

  getUserSelection() {
    this.shippingCostForm.get("shippingOption")?.valueChanges.subscribe(res => {
      this._store.dispatch(ShippingActions.setShippingCost({ shippingType: res }))
    })
  }

  getTotal() {
    this.total$ = combineLatest([this.subtotal$,this.shippingCost$]).pipe(
      map(([subtotal,shippingCost]) =>{
        return subtotal + shippingCost
      })
    )
  }

  onPlaceOrder() {
    this.placeOrder.emit();
  }
}
