import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/App/app.reeducer';
import * as appActions from '../../../../../store/App/app.actions'
import { fadeInRight } from '../../../../core/animations';

@Component({
  selector: 'Gosto-shopping-cart-popup',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart-popup.component.html',
  styleUrl: './shopping-cart-popup.component.scss',
  animations:[fadeInRight]
})
export class ShoppingCartPopupComponent {

  store = inject(Store<AppState>)
  close(){
    this.store.dispatch(appActions.toggleShoppingCartPopup())
  }
}
