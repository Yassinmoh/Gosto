import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { fadeInDown } from '../../../core/animations';
import { Observable } from 'rxjs';
import { AppState } from '../../../../store/App/app.reeducer';
import { Store } from '@ngrx/store';
import * as appActions from '../../../../store/App/app.actions'


@Component({
  selector: 'Gosto-filter-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss',
  animations: [fadeInDown]
})
export class FilterDialogComponent {
  tags: string[] = ['Uncategorized', 'Decoration', 'Dining & Kitchen', 'Furniture', 'Fashion', 'Lighting', 'Maketplace', 'Medical', 'Outdoor & Gift', 'Phone', 'Sport', 'Tables & Chairs']
  colors: any = [{ name: 'Black', code: '#000' }, { name: 'Red', code: '#FF0000' }, { name: 'Green', code: '#008000' }, { name: 'Yellow ', code: '#FFFF00' }, { name: 'Gray ', code: '#808080' }];
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  brands: string[] = ['Uncategorized', 'Decoration', 'Dining & Kitchen', 'Furniture', 'Fashion', 'Lighting', 'Maketplace', 'Medical', 'Medical', 'Outdoor & Gift', 'Phone', 'Sport', 'Tables & Chairs']

  selectedColor: number = -1
  selectedCategory: number = -1
  selectedSize: number = -1
  selectedBrand: number = -1
  showFilterDialog$!: Observable<boolean>

  store = inject(Store<AppState>)

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

  openFilterDialog() {
    this.store.dispatch(appActions.toggleFilterDialog())
  }
}



