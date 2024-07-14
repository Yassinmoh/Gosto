import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/App/app.reeducer';
import * as appActions from '../../../../../store/App/app.actions'
import { fadeInRight } from '../../../../core/animations';
import { CartService } from '../../../../core/services/cart.service';
import { CartItemComponent } from '../../cards/cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'Gosto-shopping-cart-popup',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './shopping-cart-popup.component.html',
  styleUrl: './shopping-cart-popup.component.scss',
  animations: [fadeInRight]
})
export class ShoppingCartPopupComponent implements OnInit {

  store = inject(Store<AppState>);
  _cartService = inject(CartService)
  cartItems$!: Observable<any>

  ngOnInit(): void {
    this.cartItems$= this._cartService.getCart()
  }

  close() {
    this.store.dispatch(appActions.toggleShoppingCartPopup())
  }
}
