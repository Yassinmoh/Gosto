import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartState } from '../../../../../store/Cart/cart.reducer';
import { Store } from '@ngrx/store';
import * as cartActions from '../../../../../store/Cart/cart.actions'
import * as wishlistActions from '../../../../../store/Wishlist/wishlist.actions'
import { ToastrService } from 'ngx-toastr';
import { WishlistState } from '../../../../../store/Wishlist/wishlist.reducer';

@Component({
  selector: 'Gosto-selling-product-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './selling-product-card.component.html',
  styleUrl: './selling-product-card.component.scss'
})
export class SellingProductCardComponent{
  @Input() product!:Product
  _store= inject(Store<CartState | WishlistState>)
  _toastr = inject(ToastrService)

  addToCart(product:Product){
    this._store.dispatch(cartActions.addToCart({product:{...product,quantity:1}}))
    this._toastr.success("Product added to Cart successfully")
  }

  addToWishlist(product:Product){
    this._store.dispatch(wishlistActions.addToWishlist({product}));
    this._toastr.success("Product added to Wishlist successfully")
  }
}
