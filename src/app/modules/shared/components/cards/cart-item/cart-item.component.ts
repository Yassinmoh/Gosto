import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { Router, RouterModule } from '@angular/router';
import { AppState } from '../../../../../store/App/app.reeducer';
import { Store } from '@ngrx/store';
import * as AppActions from '../../../../../store/App/app.actions'

@Component({
  selector: 'Gosto-cart-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() product!:Product
  router = inject(Router);
  store = inject(Store<AppState>);
  goToProduct(){
    this.router.navigate(['/shop/product',this.product.id]);
    this.store.dispatch(AppActions.toggleShoppingCartPopup())
  }
}
