import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterPopupComponent } from '../../components/filter-popup/filter-popup.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import { Observable, tap } from 'rxjs';
import { filterDialog, filterPopup } from '../../../../store/App/app.selectors';
import * as appActions from '../../../../store/App/app.actions'
import { ProductCardComponent } from '../../../shared/components/cards/product-card/product-card.component';
import { DropdownModule } from 'primeng/dropdown';
import { fadeInDown } from '../../../core/animations';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product';


@Component({
  selector: 'Gosto-shop-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FilterPopupComponent, ProductCardComponent, DropdownModule],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
  animations: [fadeInDown]
})
export class ShopPageComponent implements OnInit {

  store = inject(Store<AppState>);
  productService = inject(ProductService);
  showFilterPopup$!: Observable<boolean>
  showFilterDialog$!: Observable<boolean>
  currentIndex = -1
  currentModeIndex = 2
  selectedColor: number = -1
  selectedCategory: number = -1
  selectedSize: number = -1
  selectedBrand: number = -1
  pageNumber = 1;
  pageSize = 16;
  products$!:Observable<Product[]>


  tags: string[] = ['Uncategorized', 'Decoration', 'Dining & Kitchen', 'Furniture', 'Fashion', 'Lighting', 'Maketplace', 'Medical', 'Outdoor & Gift', 'Phone', 'Sport', 'Tables & Chairs']
  views: string[] = ['two-col', 'three-col', 'four-col', 'list'];
  labels: any = [{ name: 'Default sorting' }, { name: 'Sort by popularity' }, { name: 'Sort by average rating' }, { name: 'Sort by latest' }, { name: 'Sort by price: low to high' }, { name: 'Sort by price: high to low' }];
  colors: any = [{ name: 'Black', code: '#000' }, { name: 'Red', code: '#FF0000' }, { name: 'Green', code: '#008000' }, { name: 'Yellow ', code: '#FFFF00' }, { name: 'Gray ', code: '#808080' }];
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  brands: string[] = ['Uncategorized', 'Decoration', 'Dining & Kitchen', 'Furniture', 'Fashion', 'Lighting', 'Maketplace', 'Medical', 'Medical', 'Outdoor & Gift', 'Phone', 'Sport', 'Tables & Chairs']

  ngOnInit(): void {
    this.showFilterPopup$ = this.store.select(filterPopup);
    this.showFilterDialog$ = this.store.select(filterDialog);
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.getProducts()
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
  }

  selectOption(type: string, index: number) {
    switch (type) {
      case 'color':
        this.selectedColor = index;
        break;
      case 'category':
        this.selectedCategory = index;
        break;
      case 'size':
        this.selectedSize = index;
        break;
      case 'brand':
        this.selectedBrand = index;
        break;
      default:
        break;
    }
  }

  getProducts(){
    this.products$ = this.productService.getProducts(this.pageNumber,this.pageSize).pipe(
      tap(data=> console.log("Incoming data",data)
      )
    )
  }

}
