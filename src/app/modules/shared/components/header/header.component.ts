import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import * as appActions from '../../../../store/App/app.actions'
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'Gosto-header',
  standalone: true,
  imports: [CommonModule, LanguageSwitcherComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  breakpointObserver: BreakpointObserver = inject(BreakpointObserver);
  isMobile!: boolean;
  currentUrl:string=''
  store = inject(Store<AppState>)
  router = inject(Router)

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe(result => this.isMobile = result.matches);

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.urlAfterRedirects.split('/')[1];
        }
      });
  }

  openCart() {
    this.store.dispatch(appActions.toggleShoppingCartPopup())
  }

  openMenu() {
    this.store.dispatch(appActions.toggleMenuPopup())
  }

  openWishlist() {
    this.store.dispatch(appActions.toggleWishlistPopup())
  }
}
