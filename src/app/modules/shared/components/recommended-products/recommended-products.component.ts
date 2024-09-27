import { IndexedDBService } from './../../../core/services/indexeddb.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../../core/models/product';
import { map, Observable, of, tap } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { RecommendedProductCardComponent } from '../cards/recommended-product-card/recommended-product-card.component';

@Component({
  selector: 'Gosto-recommended-products',
  standalone: true,
  imports: [CommonModule, CarouselModule, RecommendedProductCardComponent],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.scss'
})
export class RecommendedProductsComponent implements OnInit {

  indexedDBService = inject(IndexedDBService)
  _productService = inject(ProductService)

  products$!: Observable<Product[]>
  pageNumber = 1;
  pageSize = 8;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: false,
    dots: false,
    rtl: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1023: {
        items: 4,
      }
    }
  }


  ngOnInit(): void {
    this.loadProducts()
  }

  async loadProducts() {
    const cacheKey = `Products_Page_${this.pageNumber}_Size_${this.pageSize}`; // Unique cache key for each page

    const cachedData = await this.indexedDBService.getProducts(cacheKey); // Get cached data for the current page



    if (cachedData && cachedData.length > 0) {
      this.products$ = of(cachedData); // Use cached products for this page
    } else {
      this.products$ = this._productService.getProducts(this.pageNumber, this.pageSize).pipe(
        map(data => data.items),
        tap(async (response: any) => {
          await this.indexedDBService.setProducts(cacheKey, response); // Cache products for this page
        })
      );
    }
  }
}
