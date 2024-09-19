import { Component, inject, OnInit } from '@angular/core';
import { CartTableModeComponent } from '../../components/cart-table-mode/cart-table-mode.component';
import { CartitemGridCardComponent } from '../../components/cartitem-grid-card/cartitem-grid-card.component';
import { Observable } from 'rxjs';
import { CartItem } from '../../../core/models/CartItem';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { Store } from '@ngrx/store';
import { getCartItems } from '../../../../store/Cart/cart.selectors';
import { CommonModule } from '@angular/common';
import { CartTotalsComponent } from '../../components/cart-totals/cart-totals.component';
import { ProgressBarGiftComponent } from '../../components/progress-bar-gift/progress-bar-gift.component';

@Component({
  selector: 'Gosto-cart-page',
  standalone: true,
  imports: [CommonModule,CartTableModeComponent,CartitemGridCardComponent,CartTotalsComponent,ProgressBarGiftComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit {

  _store =inject(Store<CartState>)
  cartItems$!:Observable<CartItem[]>

  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems() {
    this.cartItems$ = this._store.select(getCartItems)
  }
}
