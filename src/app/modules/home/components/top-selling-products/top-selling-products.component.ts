import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SellingProductCardComponent } from '../../../shared/components/cards/selling-product-card/selling-product-card.component';
import { ProductService } from '../../../core/services/product.service';
import { map, Observable, of, tap } from 'rxjs';
import { Product } from '../../../core/models/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { IndexedDBService } from '../../../core/services/indexeddb.service';

@Component({
  selector: 'Gosto-top-selling-products',
  standalone: true,
  imports: [CommonModule, SellingProductCardComponent,CarouselModule],
  templateUrl: './top-selling-products.component.html',
  styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent implements OnInit {

  productService = inject(ProductService);
  indexedDBService = inject(IndexedDBService);

  products$!: Observable<Product[]>

  products: Product[] = [];
  tags: string[] = ['All Products','Smart','Watchs','Iphone','Games','Labtops'];
  currentIndex = 0
  pageNumber = 1;
  pageSize = 5;

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
        items: 3,
      },
      1023: {
        items: 4,
      }
    }
  }

  ngOnInit(): void {
    this.loadProducts()
  }

  select(index:number){
    this.currentIndex =index
  }

  async loadProducts() {
    const cachedProducts = await this.indexedDBService.getTopSellingProducts('top-selling');
    if (cachedProducts && cachedProducts.length > 0) {
      this.products$ = of(cachedProducts);
    } else {
      this.products$ = this.productService.getProducts(this.pageNumber, this.pageSize).pipe(
        map(data => data.items),
        tap(async (data) => {
          await this.indexedDBService.setTopSellingProducts(data);
        })
      );
    }
  }
}
