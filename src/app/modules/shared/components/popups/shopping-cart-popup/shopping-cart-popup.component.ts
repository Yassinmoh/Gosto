import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/App/app.reeducer';
import * as appActions from '../../../../../store/App/app.actions'
import { fadeInRight } from '../../../../core/animations';
import { CartService } from '../../../../core/services/cart.service';
import { CartItemComponent } from '../../cards/cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { CartState } from '../../../../../store/Cart/cart.reducer';
import { getCartItems, getSubTotal } from '../../../../../store/Cart/cart.selectors';

@Component({
  selector: 'Gosto-shopping-cart-popup',
  standalone: true,
  imports: [CommonModule, CartItemComponent,RouterModule],
  templateUrl: './shopping-cart-popup.component.html',
  styleUrl: './shopping-cart-popup.component.scss',
  animations: [fadeInRight]
})
export class ShoppingCartPopupComponent implements OnInit {

  _store = inject(Store<AppState | CartState>);
  _router = inject(Router)

  cartItems$!: Observable<any>
  total$!: Observable<number>

  ngOnInit(): void {
    this.cartItems$= this._store.select(getCartItems)
    this.total$= this._store.select(getSubTotal)
  }

  goToShop(){
    this._router.navigate(['/shop']);
    this._store.dispatch(appActions.toggleShoppingCartPopup())
  }

  close() {
    this._store.dispatch(appActions.toggleShoppingCartPopup())
  }

  navigateTo(destination:string){
    this._router.navigate([destination]);
    this._store.dispatch(appActions.toggleShoppingCartPopup())
  }
}
