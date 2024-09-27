import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { Product } from '../../../../core/models/product';
import { MaxlengthPipe } from '../../../pipes/maxlength.pipe';
import { Observable, tap } from 'rxjs';
import { ProductService } from '../../../../core/services/product.service';
import { Router, RouterModule } from '@angular/router';
import { AppState } from '../../../../../store/App/app.reeducer';
import * as AppActions from '../../../../../store/App/app.actions'
import { Store } from '@ngrx/store';

@Component({
  selector: 'Gosto-comparison-popup',
  standalone: true,
  imports: [CommonModule, DropdownModule, FormsModule, MaxlengthPipe, RouterModule],
  templateUrl: './comparison-popup.component.html',
  styleUrl: './comparison-popup.component.scss'
})
export class ComparisonPopupComponent implements OnInit {

  _productService = inject(ProductService);
  _store = inject(Store<AppState>);
  _router = inject(Router);

  @Input() products!: Product[] | null
  @Input() currentProduct!: Product | null
  comparativeProduct$!: Observable<Product>

  ngOnInit(): void {

  }

  onProductChange(event: any) {
    let selectedId = event.value;
    this.comparativeProduct$ = this._productService.getProductById(selectedId)
  }

  goToProduct(prodId: number) {
    this._router.navigate(['/shop/product', prodId])
    this.close()
  }

  close() {
    this._store.dispatch(AppActions.toggleComparasonPopup())
  }
}
