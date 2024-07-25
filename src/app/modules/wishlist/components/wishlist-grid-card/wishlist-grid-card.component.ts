import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../core/models/product';
import { Store } from '@ngrx/store';
import { WishlistState } from '../../../../store/Wishlist/wishlist.reducer';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { ToastrService } from 'ngx-toastr';
import * as WishlistActions from '../../../../store/Wishlist/wishlist.actions'
import * as CartActions from '../../../../store/Cart/cart.actions'


@Component({
  selector: 'Gosto-wishlist-grid-card',
  standalone: true,
  imports: [],
  templateUrl: './wishlist-grid-card.component.html',
  styleUrl: './wishlist-grid-card.component.scss'
})
export class WishlistGridCardComponent {
@Input() product!:Product;

_store = inject(Store<WishlistState | CartState>);
_toastr = inject(ToastrService)

removeFromWishlist(product:Product){
  this._store.dispatch(WishlistActions.removeFromWishlist({product}))
  this._toastr.success("Product removed successfully");
}

addToCard(product:Product){
  this._store.dispatch(CartActions.addToCart({product:{...product,quantity:1}}));
  this._store.dispatch(WishlistActions.removeFromWishlist({product}))
  this._toastr.success("Product Added successfully to Cart");
}
}
