import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterPopupComponent } from '../../components/filter-popup/filter-popup.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import { Observable } from 'rxjs';
import { filterPopup } from '../../../../store/App/app.selectors';
import * as appActions from '../../../../store/App/app.actions'

@Component({
  selector: 'Gosto-shop-page',
  standalone: true,
  imports: [CommonModule,RouterModule,FilterPopupComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss'
})
export class ShopPageComponent implements OnInit {
  store = inject(Store<AppState>);
  showFilterPopup$!:Observable<boolean>

  ngOnInit(): void {
    this.showFilterPopup$ = this.store.select(filterPopup)
  }

  openFilter(){
    this.store.dispatch(appActions.toggleFilterPopup())
  }
}
