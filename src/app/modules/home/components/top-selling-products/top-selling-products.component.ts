import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SellingProductCardComponent } from '../../../shared/components/cards/selling-product-card/selling-product-card.component';
import { ProductService } from '../../../core/services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'Gosto-top-selling-products',
  standalone: true,
  imports: [CommonModule, SellingProductCardComponent],
  templateUrl: './top-selling-products.component.html',
  styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent implements OnInit {

  productService = inject(ProductService);
  products$!: Observable<Product[]>
  ngOnInit(): void {
    this.products$ = this.productService.getProducts()
  }
}
