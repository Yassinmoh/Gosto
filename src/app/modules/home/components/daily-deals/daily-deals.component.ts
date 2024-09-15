import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaxlengthPipe } from '../../../shared/pipes/maxlength.pipe';
import { SalePricePipe } from '../../../shared/pipes/sale-price.pipe';
import { ProductDealCardComponent } from '../../../shared/components/cards/product-deal-card/product-deal-card.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { IndexedDBService } from '../../../core/services/indexeddb.service';
import { map, Observable, of, tap } from 'rxjs';
import { Product } from '../../../core/models/product';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'Gosto-daily-deals',
  standalone: true,
  imports: [CommonModule,ProductDealCardComponent,CarouselModule,RouterModule],
  templateUrl: './daily-deals.component.html',
  styleUrl: './daily-deals.component.scss'
})
export class DailyDealsComponent implements OnInit {

  _indexedDBService = inject(IndexedDBService);
  _productService = inject(ProductService);
  cdRef= inject( ChangeDetectorRef)
  products$!:Observable<Product[]>
  pageNumber=1
  pageSize=12

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
        items: 5,
      }
    }
  }

  ngOnInit(): void {
    this.products$ = this._productService.getTopProductsHaveSale()
  }


  // async loadProducts() {
  //   const cachedProducts = await this._indexedDBService.getTopSellingProducts('top-selling');
  //   if (cachedProducts && cachedProducts.length > 0) {
  //     this.products$ = of(cachedProducts);
  //   } else {
  //     this.products$ = this._productService.getProducts(this.pageNumber, this.pageSize).pipe(
  //       map(data => data.items),
  //       tap(async (data) => {
  //         await this._indexedDBService.setTopSellingProducts(data);
  //       })
  //     );
  //   }
  // }
}
