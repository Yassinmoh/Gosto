import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import * as appActions from '../../../../store/App/app.actions'
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { Observable, of } from 'rxjs';
import { getCartItemsCount } from '../../../../store/Cart/cart.selectors';
import { WishlistState } from '../../../../store/Wishlist/wishlist.reducer';
import { wishListItemsCount } from '../../../../store/Wishlist/wishlist.selectors';


@Component({
  selector: 'Gosto-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isMobile!: boolean;
  currentUrl: string = ''
  cartItemCount$: Observable<number> = of(0)
  wishListCount$: Observable<number> = of(0)

  _breakpointObserver: BreakpointObserver = inject(BreakpointObserver);
  _store = inject(Store<AppState | CartState | WishlistState>)
  _router = inject(Router)

  ngOnInit(): void {
    this.handleScreenDimensions()
    this.getCurrentUrl()
    this.getCartItemsCount()
    this.getWishListCount()
  }

  handleScreenDimensions() {
    this._breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe(result => this.isMobile = result.matches);
  }

  getCurrentUrl() {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects.split('/')[1]
      }
    });
    this.currentUrl = this._router.url.split('/')[1];
  }

  openCart() {
    this._store.dispatch(appActions.toggleShoppingCartPopup())
  }

  getCartItemsCount() {
    this.cartItemCount$ = this._store.select(getCartItemsCount)
  }

  openMenu() {
    this._store.dispatch(appActions.toggleMenuPopup())
  }

  openWishlist() {
    this._store.dispatch(appActions.toggleWishlistPopup())
  }

  getWishListCount(){
    this.wishListCount$=this._store.select(wishListItemsCount)
  }
}
