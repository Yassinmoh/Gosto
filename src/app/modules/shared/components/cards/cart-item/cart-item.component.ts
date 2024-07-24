import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { Router, RouterModule } from '@angular/router';
import { AppState } from '../../../../../store/App/app.reeducer';
import { Store } from '@ngrx/store';
import * as AppActions from '../../../../../store/App/app.actions'
import * as CartActions from '../../../../../store/Cart/cart.actions'
import * as WishListActions from '../../../../../store/Wishlist/wishlist.actions'
import { CartState } from '../../../../../store/Cart/cart.reducer';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../../../../core/models/CartItem';
import { WishlistState } from '../../../../../store/Wishlist/wishlist.reducer';

@Component({
  selector: 'Gosto-cart-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() product!:CartItem
  @Input() type!:string

  _router = inject(Router);
  _store = inject(Store<AppState | CartState | WishlistState>);
  _toastr = inject(ToastrService)

  goToProduct(){
    this._router.navigate(['/shop/product',this.product.id]);
    this.type === 'cart'
    ? this._store.dispatch(AppActions.toggleShoppingCartPopup())
    :this._store.dispatch(AppActions.toggleWishlistPopup())
  }

  removeFromCart(product:Product){
    this.type === 'cart'
    ? this._store.dispatch(CartActions.removeFromCart({product}))
    : this._store.dispatch(WishListActions.removeFromWishlist({product}))
    this._toastr.success('Product removed successfully')
  }
}
