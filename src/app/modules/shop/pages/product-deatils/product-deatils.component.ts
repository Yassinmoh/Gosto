import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { RecommendedProductsComponent } from '../../../shared/components/recommended-products/recommended-products.component';


@Component({
  selector: 'Gosto-product-deatils',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, CarouselModule, LightboxModule,RecommendedProductsComponent],
  templateUrl: './product-deatils.component.html',
  styleUrl: './product-deatils.component.scss'
})
export class ProductDeatilsComponent implements OnInit {

  activeTab: number = 1;
  _album:any[] = [
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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  open(index:number){
    this._lightbox.open(this._album,index);
  }

  close(): void {
    this._lightbox.close();
  }

  selectTab(tabIndex: number): void {
    this.activeTab = tabIndex;
    this.activeTab == 1
  }
}
