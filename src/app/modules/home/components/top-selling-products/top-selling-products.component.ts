import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SellingProductCardComponent } from '../../../shared/components/cards/selling-product-card/selling-product-card.component';
import { ProductService } from '../../../core/services/product.service';
import { Observable, tap } from 'rxjs';
import { Product } from '../../../core/models/product';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'Gosto-top-selling-products',
  standalone: true,
  imports: [CommonModule, SellingProductCardComponent,CarouselModule],
  templateUrl: './top-selling-products.component.html',
  styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent implements OnInit {

  productService = inject(ProductService);
  products$!: Observable<Product[]>
  products: Product[] = [];
  tags: string[] = ['All Products','Smart','Watchs','Iphone','Games','Labtops'];
  currentIndex = 0


  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
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
    this.products$ = this.productService.getProducts().pipe(
      tap(data => this.products = data)
    )
  }

  select(index:number){
    this.currentIndex =index
  }
}
