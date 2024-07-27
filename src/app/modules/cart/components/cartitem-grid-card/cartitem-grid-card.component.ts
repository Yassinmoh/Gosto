import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../core/models/product';
import { Store } from '@ngrx/store';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { ToastrService } from 'ngx-toastr';
import * as CartActions from '../../../../store/Cart/cart.actions'
import { CartItem } from '../../../core/models/CartItem';


@Component({
  selector: 'Gosto-cartitem-grid-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartitem-grid-card.component.html',
  styleUrl: './cartitem-grid-card.component.scss'
})
export class CartitemGridCardComponent {


  @Input() product!: CartItem;

  _store = inject(Store<CartState>);
  _toastr = inject(ToastrService)


  addToCard(product: Product) {
    this._store.dispatch(CartActions.addToCart({ product: { ...product, quantity: 1 } }));
    this._toastr.success("Product Added successfully to Cart");
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

  removeFromCart(product: Product){
    this._store.dispatch(CartActions.removeFromCart({product}))
  }
}
