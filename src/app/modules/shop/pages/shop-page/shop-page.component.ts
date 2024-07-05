import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterPopupComponent } from '../../components/filter-popup/filter-popup.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import { Observable } from 'rxjs';
import { filterDialog, filterPopup } from '../../../../store/App/app.selectors';
import * as appActions from '../../../../store/App/app.actions'
import { ProductCardComponent } from '../../../shared/components/cards/product-card/product-card.component';
import { DropdownModule } from 'primeng/dropdown';
import { fadeInDown } from '../../../core/animations';


@Component({
  selector: 'Gosto-shop-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FilterPopupComponent, ProductCardComponent, DropdownModule],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
  animations:[fadeInDown]
})
export class ShopPageComponent implements OnInit {
  store = inject(Store<AppState>);
  showFilterPopup$!: Observable<boolean>
  showFilterDialog$!: Observable<boolean>
  currentIndex = -1
  currentModeIndex = 2

  tags: string[] = ['Uncategorized', 'Decoration', 'Dining & Kitchen', 'Furniture', 'Fashion', 'Lighting', 'Maketplace', 'Medical', 'Medical', 'Outdoor & Gift', 'Phone', 'Sport', 'Tables & Chairs']
  views: string[] = ['two-col', 'three-col', 'four-col', 'list'];
  labels: any = [{ name: 'Default sorting' }, { name: 'Sort by popularity' }, { name: 'Sort by average rating' }, { name: 'Sort by latest' }, { name: 'Sort by price: low to high' }, { name: 'Sort by price: high to low' }];
  colors: string[] = ['Black', 'Red', 'Green', 'Yellow','Gray'];
  sizes: string[] = ['XS', 'S', 'M', 'L','XL','XXL'];
  brands: string[] = ['Uncategorized', 'Decoration', 'Dining & Kitchen', 'Furniture', 'Fashion', 'Lighting', 'Maketplace', 'Medical', 'Medical', 'Outdoor & Gift', 'Phone', 'Sport', 'Tables & Chairs']

  ngOnInit(): void {
    this.showFilterPopup$ = this.store.select(filterPopup);
    this.showFilterDialog$ = this.store.select(filterDialog);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  openFilter() {
    this.store.dispatch(appActions.toggleFilterPopup())
  }

  openFilterDialog(){
    this.store.dispatch(appActions.toggleFilterDialog())
  }

  select(index: number) {
    this.currentIndex = index
  }

  selectMode(index: number) {
    this.currentModeIndex = index
  }
}
