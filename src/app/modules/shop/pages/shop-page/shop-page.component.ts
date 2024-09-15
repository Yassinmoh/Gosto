import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterPopupComponent } from '../../components/filter-popup/filter-popup.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import { map, Observable, of, tap } from 'rxjs';
import { filterDialog, filterPopup, getViewMode } from '../../../../store/App/app.selectors';
import * as appActions from '../../../../store/App/app.actions'
import { ProductCardComponent } from '../../../shared/components/cards/product-card/product-card.component';
import { DropdownModule } from 'primeng/dropdown';
import { fadeInDown } from '../../../core/animations';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product';
import { SkeletonComponent } from '../../../shared/components/skeleton/skeleton.component';
import { FilterDialogComponent } from '../../components/filter-dialog/filter-dialog.component';
import { IndexedDBService } from '../../../core/services/indexeddb.service';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';


@Component({
  selector: 'Gosto-shop-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FilterPopupComponent, ProductCardComponent, DropdownModule, SkeletonComponent, FilterDialogComponent, PaginatorComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
  animations: [fadeInDown]
})
export class ShopPageComponent implements OnInit {

  store = inject(Store<AppState>);
  productService = inject(ProductService);
  indexedDBService = inject(IndexedDBService);

  currentIndex = -1
  currentModeIndex = 2

  pageNumber = 1;
  pageSize = 12;
  totalRecords = 0;

  showFilterPopup$!: Observable<boolean>
  showFilterDialog$!: Observable<boolean>
  products$!: Observable<Product[]>
  productsArray: Product[] =[]
  sortedProducts$: Observable<Product[]> = of([])
  viewMode$!: Observable<string>

  tags: string[] = ['Uncategorized', 'Decoration', 'Dining & Kitchen', 'Furniture', 'Fashion', 'Lighting', 'Maketplace', 'Medical', 'Outdoor & Gift', 'Phone', 'Sport', 'Tables & Chairs']
  views: string[] = ['two-col', 'three-col', 'four-col', 'list'];
  labels: any = [{ name: 'Default sorting',code:1 }, { name: 'Sort by popularity',code:2 }, { name: 'Sort by latest',code:3 }, { name: 'Sort by price: low to high',code:4 }, { name: 'Sort by price: high to low',code:5 }];

  sortFunctions:{[key:number] : (a:any, b:any) => any} = {
    1: (a:Product, b:Product) => a,
    2: (a:Product, b:Product) => b.popularity - a.popularity,
    3: (a:Product, b:Product) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
    4: (a:Product, b:Product) => a.price - b.price,
    5: (a:Product, b:Product) => b.price - a.price
  }
  ngOnInit(): void {
    this.showFilterPopup$ = this.store.select(filterPopup);
    this.showFilterDialog$ = this.store.select(filterDialog);
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.loadProducts();
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
    this.store.dispatch(appActions.setViewMode({ mode: currentMode }))
  }


  async loadProducts() {
    // Get all products records size
    this.productService.getTotalProductsRecord().pipe(
      tap(data => this.totalRecords = data)
    ).subscribe();

    const cacheKey = `Products_Page_${this.pageNumber}_Size_${this.pageSize}`; // Unique cache key for each page
    const cachedData = await this.indexedDBService.getProducts(cacheKey); // Get cached data for the current page

    if (cachedData && cachedData.length > 0) {
      this.productsArray = cachedData; // Use cached products for this page
      this.sortedProducts$ = of(this.productsArray); // Default display without sorting
    } else {
      //if there no cached data call API to get data:
      this.productService.getProducts(this.pageNumber, this.pageSize).pipe(
        tap(async (response: any) => {
          this.productsArray = response.items; // Assign products from API
          await this.indexedDBService.setProducts(cacheKey, this.productsArray); // Cache products for this page
          this.totalRecords = response.totalRecords; // Update total records based on API response
        }),
        // Directly update the observable with the fetched products
        map(response => response.items)
      ).subscribe(products => {
        this.sortedProducts$ = of(products);
      });
    }
  }

  sort(event: any) {
    const sortCode = event.value;
    const sortFn = this.sortFunctions[sortCode] || this.sortFunctions[1];

    if (this.productsArray && this.productsArray.length > 0) {
      // Create a new array using slice, then sort it
      let sortedArray = this.productsArray.slice().sort(sortFn);
      this.sortedProducts$ = of(sortedArray)
    } else {
      console.error('Product array is not available for sorting');
    }
  }

  onPageChange(event: any) {
    this.pageNumber = event.page + 1;
    this.pageSize = event.rows;
    this.loadProducts();
  }


}
