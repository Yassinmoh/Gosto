import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/App/app.reeducer';
import * as appActions from '../../../../../store/App/app.actions'
import { fadeInRight } from '../../../../core/animations';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../../cards/cart-item/cart-item.component';
import { Router, RouterModule } from '@angular/router';
import { WishlistState } from '../../../../../store/Wishlist/wishlist.reducer';
import { Observable } from 'rxjs';
import { wishListItems } from '../../../../../store/Wishlist/wishlist.selectors';


@Component({
  selector: 'Gosto-wishlist-popup',
  standalone: true,
  imports: [CommonModule, CartItemComponent, RouterModule],
  templateUrl: './wishlist-popup.component.html',
  styleUrl: './wishlist-popup.component.scss',
  animations: [fadeInRight]
})
export class WishlistPopupComponent implements OnInit {

  wishListItems$!: Observable<any>

  _store = inject(Store<AppState | WishlistState>);
  _router = inject(Router)

  ngOnInit(): void {
    this.wishListItems$ = this._store.select(wishListItems)
  }

  close() {
    this._store.dispatch(appActions.toggleWishlistPopup())
  }

  navigateTo(destination: string){
    this._router.navigate([destination]);
    this._store.dispatch(appActions.toggleWishlistPopup())
  }
}
