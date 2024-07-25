import { Observable } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { WishlistState } from '../../../../store/Wishlist/wishlist.reducer';
import { Store } from '@ngrx/store';
import { Product } from '../../../core/models/product';
import { wishListItems } from '../../../../store/Wishlist/wishlist.selectors';
import { CommonModule } from '@angular/common';
import * as WishlistActions from '../../../../store/Wishlist/wishlist.actions'
import * as CartActions from '../../../../store/Cart/cart.actions'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'Gosto-wishlist-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wishlist-row.component.html',
  styleUrl: './wishlist-row.component.scss'
})
export class WishlistRowComponent implements OnInit {

  _store = inject(Store<WishlistState>);
  _toastr = inject(ToastrService)

  wishListItems$!:Observable<Product[]>
  ngOnInit(): void {
    this.getWishListItems()
  }

  getWishListItems(){
    this.wishListItems$ = this._store.select(wishListItems)
  }

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
