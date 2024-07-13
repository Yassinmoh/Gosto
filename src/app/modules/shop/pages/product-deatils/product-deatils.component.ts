import { Component, Inject, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { RecommendedProductsComponent } from '../../../shared/components/recommended-products/recommended-products.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { Observable, throwError } from 'rxjs';
import { Product } from '../../../core/models/product';


@Component({
  selector: 'Gosto-product-deatils',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, CarouselModule, LightboxModule, RecommendedProductsComponent, RouterModule],
  templateUrl: './product-deatils.component.html',
  styleUrl: './product-deatils.component.scss'
})
export class ProductDeatilsComponent implements OnInit {

  _route = inject(ActivatedRoute)
  _productService = inject(ProductService)

  activeTab: number = 1;
  product$!: Observable<Product>
  _album: any[] = [
    {
      src: "./assets/images/1.jpg",
      caption: "Image 1",
      thumb: "./assets/images/1.jpg"
    },
    {
      src: "./assets/images/2.jpg",
      caption: "Image 2",
      thumb: "./assets/images/2.jpg"
    },
    {
      src: "./assets/images/3.jpg",
      caption: "Image 3",
      thumb: "./assets/images/3.jpg"
    },
    {
      src: "./assets/images/4.jpg",
      caption: "Image 4",
      thumb: "./assets/images/4.jpg"
    },

  ]
  images: any[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  _lightbox = inject(Lightbox)

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
    this._route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      console.log("id",id);

      if (id) {
        this.product$ = this._productService.getProductById(id)
      }else{
        throwError('Feaild to get product with id ' + id)
      }
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  open(index: number) {
    this._lightbox.open(this._album, index);
  }

  close(): void {
    this._lightbox.close();
  }

  selectTab(tabIndex: number): void {
    this.activeTab = tabIndex;
    this.activeTab == 1
  }
}
