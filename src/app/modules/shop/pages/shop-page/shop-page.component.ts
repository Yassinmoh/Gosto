import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterPopupComponent } from '../../components/filter-popup/filter-popup.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import { Observable } from 'rxjs';
import { filterPopup } from '../../../../store/App/app.selectors';
import * as appActions from '../../../../store/App/app.actions'
import { ProductCardComponent } from '../../../shared/components/cards/product-card/product-card.component';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'Gosto-shop-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FilterPopupComponent,ProductCardComponent,DropdownModule],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss'
})
export class ShopPageComponent implements OnInit {
  store = inject(Store<AppState>);
  showFilterPopup$!: Observable<boolean>
  currentIndex = -1
  currentModeIndex = 2

  tags: string[] = ['Uncategorized', 'Decoration', 'Dining & Kitchen', 'Furniture', 'Fashion', 'Lighting', 'Maketplace', 'Medical', 'Medical', 'Outdoor & Gift', 'Phone', 'Sport', 'Tables & Chairs']
  views: string[] = ['two-col','three-col','four-col','list'];
  labels: any = [{name:'Default sorting'},{name:'Sort by popularity'},{name:'Sort by average rating'},{name:'Sort by latest'},{name:'Sort by price: low to high'},{name:'Sort by price: high to low'}];

  ngOnInit(): void {
    this.showFilterPopup$ = this.store.select(filterPopup)
  }

  openFilter() {
    this.store.dispatch(appActions.toggleFilterPopup())
  }

  select(index: number) {
    this.currentIndex = index
  }

  selectMode(index: number){
    this.currentModeIndex = index
  }
}
