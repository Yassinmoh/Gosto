import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/App/app.reeducer';
import * as appActions  from '../../../../../store/App/app.actions'
import { fadeInRight } from '../../../../core/animations';


@Component({
  selector: 'Gosto-wishlist-popup',
  standalone: true,
  imports: [],
  templateUrl: './wishlist-popup.component.html',
  styleUrl: './wishlist-popup.component.scss',
  animations:[fadeInRight]
})
export class WishlistPopupComponent {
  store = inject(Store<AppState>)
  close(){
    this.store.dispatch(appActions.toggleWishlistPopup())
  }
}
