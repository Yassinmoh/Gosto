import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterPopupComponent } from '../../components/filter-popup/filter-popup.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import { Observable, tap } from 'rxjs';
import { filterDialog, filterPopup, getViewMode } from '../../../../store/App/app.selectors';
import * as appActions from '../../../../store/App/app.actions'
import { ProductCardComponent } from '../../../shared/components/cards/product-card/product-card.component';
import { DropdownModule } from 'primeng/dropdown';
import { fadeInDown } from '../../../core/animations';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product';
import { SharedModule } from 'primeng/api';
import { SkeletonComponent } from '../../../shared/components/skeleton/skeleton.component';
import { FilterDialogComponent } from '../../components/filter-dialog/filter-dialog.component';


@Component({
  selector: 'Gosto-shop-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FilterPopupComponent, ProductCardComponent, DropdownModule,SkeletonComponent,FilterDialogComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
  animations: [fadeInDown]
})
export class ShopPageComponent implements OnInit {

  store = inject(Store<AppState>);
  productService = inject(ProductService);

  currentIndex = -1
  currentModeIndex = 2
  pageNumber = 1;
  pageSize = 16;

  showFilterPopup$!: Observable<boolean>
  showFilterDialog$!: Observable<boolean>
  products$!:Observable<Product[]>
  viewMode$!:Observable<string>

  tags: string[] = ['Uncategorized', 'Decoration', 'Dining & Kitchen', 'Furniture', 'Fashion', 'Lighting', 'Maketplace', 'Medical', 'Outdoor & Gift', 'Phone', 'Sport', 'Tables & Chairs']
  views: string[] = ['two-col', 'three-col', 'four-col', 'list'];
  labels: any = [{ name: 'Default sorting' }, { name: 'Sort by popularity' }, { name: 'Sort by average rating' }, { name: 'Sort by latest' }, { name: 'Sort by price: low to high' }, { name: 'Sort by price: high to low' }];

  ngOnInit(): void {
    this.showFilterPopup$ = this.store.select(filterPopup);
    this.showFilterDialog$ = this.store.select(filterDialog);
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.getProducts();
    this.viewMode$ = this.store.select(getViewMode)
  }

  openFilter() {
    this.store.dispatch(appActions.toggleFilterPopup())
  }

  openFilterDialog() {
    this.store.dispatch(appActions.toggleFilterDialog())
  }

  selectTag(index: number) {
    this.currentIndex = index
  }

  selectMode(index: number) {
    this.currentModeIndex = index
    let currentMode = this.views[this.currentModeIndex]
    this.store.dispatch(appActions.setViewMode({mode:currentMode}))
  }


  getProducts(){
    this.products$ = this.productService.getProducts(this.pageNumber,this.pageSize).pipe(
      tap(data=> console.log("Incoming data",data)
      )
    )
  }

}
