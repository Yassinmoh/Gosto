import { Component, Inject, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { RecommendedProductsComponent } from '../../../shared/components/recommended-products/recommended-products.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { catchError, combineLatest, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Product } from '../../../core/models/product';
import { CartService } from '../../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import * as AppActions from '../../../../store/App/app.actions'
import * as ProductActions from '../../../../store/Cart/cart.actions'
import * as wishlistActions from '../../../../store/Wishlist/wishlist.actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/App/app.reeducer';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { WishlistState } from '../../../../store/Wishlist/wishlist.reducer';
import { wishListItems } from '../../../../store/Wishlist/wishlist.selectors';
import { ComparisonPopupComponent } from '../../../shared/components/popups/comparison-popup/comparison-popup.component';
import { comparasonPopup } from '../../../../store/App/app.selectors';

@Component({
  selector: 'Gosto-product-deatils',
  standalone: true,
  imports: [BreadcrumbComponent, CommonModule, CarouselModule, LightboxModule, RecommendedProductsComponent, RouterModule,ComparisonPopupComponent],
  templateUrl: './product-deatils.component.html',
  styleUrl: './product-deatils.component.scss'
})
export class ProductDeatilsComponent implements OnInit {

  _route = inject(ActivatedRoute)
  _productService = inject(ProductService)
  _cartService = inject(CartService)
  _toastr = inject(ToastrService)
  _store = inject(Store<AppState | CartState | WishlistState>)
  _lightbox = inject(Lightbox)

  activeTab: number = 1;
  quantity: number = 1;
  isInWishList$!: Observable<any>;
  product$!: Observable<Product>
  allProduct$!: Observable<Product[]>
  wishlistItems$: Observable<Product[]> = this._store.select(wishListItems)
  showComparasonPopup$:Observable<boolean> =of(false)

  _album: any[] = [
    { src: "./assets/images/1.jpg", caption: "Image 1", thumb: "./assets/images/1.jpg" },
    { src: "./assets/images/2.jpg", caption: "Image 2", thumb: "./assets/images/2.jpg" },
    { src: "./assets/images/3.jpg", caption: "Image 3", thumb: "./assets/images/3.jpg" },
    { src: "./assets/images/4.jpg", caption: "Image 4", thumb: "./assets/images/4.jpg" },
  ];
  images: any[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];


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
    this.getCureentProductDetails();
    this.scrollToTop();
    this.getAllProducts()
    this.showComparasonPopup$ = this._store.select(comparasonPopup)
  }

  openLightbox(index: number) {
    this._lightbox.open(this._album, index);
  }

  closeLightbox(): void {
    this._lightbox.close();
  }

  getCureentProductDetails() {
    this.product$ = this._route.paramMap.pipe(
      map(param => Number(param.get('id'))),
      switchMap(id => {
        if (id) {
          return this._productService.getProductById(id).pipe(
            catchError(error => {
              return throwError(error);
            })
          );
        } else {
          return throwError('Invalid product ID');
        }
      })
    );

    this.isInWishList$ = combineLatest([this.product$, this.wishlistItems$]).pipe(
      map(([product, wishlist]) => {
        return !!wishlist.find(item => item.id === product.id)
      }))
  }

  /* Nedd to Convert this to Directive*/
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  selectTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(product: any, event: Event) {
    event.preventDefault()
    this._store.dispatch(ProductActions.addToCart({ product: { ...product, quantity: this.quantity } }))
    this._toastr.success('Product added successfully')
    this.quantity = 1
  }

  toggleToWishlist(product: Product) {
    this._store.dispatch(wishlistActions.toggleAddtoWishlist({ product }));
    this._toastr.success('Product Added To Wishlist successfully')
  }

  getAllProducts(){
    this.allProduct$ = this._productService.getProducts(1,50).pipe(
      map(data => data.items)
    )
  }

  compare(){
    this._store.dispatch(AppActions.toggleComparasonPopup())
  }

}
