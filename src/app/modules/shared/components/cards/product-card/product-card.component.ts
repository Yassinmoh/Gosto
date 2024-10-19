import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { CommonModule } from '@angular/common';
import { SalePricePipe } from '../../../pipes/sale-price.pipe';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartState } from '../../../../../store/Cart/cart.reducer';
import { WishlistState } from '../../../../../store/Wishlist/wishlist.reducer';
import { ToastrService } from 'ngx-toastr';
import * as cartActions from '../../../../../store/Cart/cart.actions'
import * as wishlistActions from '../../../../../store/Wishlist/wishlist.actions'
import { LazyloadDirective } from '../../../directives/lazyload.directive';


@Component({
  selector: 'Gosto-product-card',
  standalone: true,
  imports: [CommonModule,SalePricePipe,RouterModule,LazyloadDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;

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
