import { AppState } from './../../../store/App/app.reeducer';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MiniHeaderComponent } from '../../shared/components/mini-header/mini-header.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from '../../shared/components/user-menu/user-menu.component';
import { ShoppingCartPopupComponent } from '../../shared/components/popups/shopping-cart-popup/shopping-cart-popup.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { shoppingCartPopup } from '../../../store/App/app.selectors';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,MiniHeaderComponent,HeaderComponent,FooterComponent,CommonModule,UserMenuComponent,ShoppingCartPopupComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {

  breakpointObserver:BreakpointObserver = inject(BreakpointObserver);
  isMobile!:boolean;
  showShoppingCartPopup$!:Observable<boolean>
  store = inject(Store<AppState>)

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe(result => this.isMobile = result.matches);

      this.showShoppingCartPopup$ = this.store.select(shoppingCartPopup)
  }
}
