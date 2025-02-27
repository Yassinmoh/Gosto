import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product';
import { getCartItems } from '../../../../store/Cart/cart.selectors';
import { CartItem } from '../../../core/models/CartItem';
import * as CartActions from '../../../../store/Cart/cart.actions'
import { RouterModule } from '@angular/router';
import { MaxlengthPipe } from '../../../shared/pipes/maxlength.pipe';
import { LazyloadDirective } from '../../../shared/directives/lazyload.directive';


@Component({
  selector: 'Gosto-cart-table-mode',
  standalone: true,
  imports: [CommonModule,RouterModule,MaxlengthPipe,LazyloadDirective],
  templateUrl: './cart-table-mode.component.html',
  styleUrl: './cart-table-mode.component.scss'
})
export class CartTableModeComponent {

  @Input() cartItems!: CartItem[]

  _store = inject(Store<CartState>)
  cartItems$!: Observable<CartItem[]>;
  quantity!: number



  removeFromCart(product: Product) {
    this._store.dispatch(CartActions.removeFromCart({product}))
  }

  increment(productId:number) {
    this._store.dispatch(CartActions.incrementQuantity({productId}))
  }

  decrement(productId:number) {
    this._store.dispatch(CartActions.decrementQuantity({productId}))
  }

  getTotalPrice(price:number,quantity:number): number {
    return price * quantity
  }

  getQuantity(quantity:number){
    return quantity
  }

  resetCart(){
    this._store.dispatch(CartActions.resetCart())
  }
}
