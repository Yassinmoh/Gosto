import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniHeaderComponent } from './components/mini-header/mini-header.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { MenuPopupComponent } from './components/popups/menu-popup/menu-popup.component';
import { BannerItemComponent } from './components/cards/banner-item/banner-item.component';
import { SellingProductCardComponent } from './components/cards/selling-product-card/selling-product-card.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { WishlistPopupComponent } from './components/popups/wishlist-popup/wishlist-popup.component';
import { ProductCardComponent } from './components/cards/product-card/product-card.component';
import { SalePricePipe } from './pipes/sale-price.pipe';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { RecommendedProductsComponent } from './components/recommended-products/recommended-products.component';
import { RecommendedProductCardComponent } from './components/cards/recommended-product-card/recommended-product-card.component';
import { CartItemComponent } from './components/cards/cart-item/cart-item.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultCardComponent } from './components/cards/search-result-card/search-result-card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ProductDealCardComponent } from './components/cards/product-deal-card/product-deal-card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MiniHeaderComponent,
    HeaderComponent,
    FooterComponent,
    LanguageSwitcherComponent,
    MenuPopupComponent,
    BannerItemComponent,
    SellingProductCardComponent,
    ScrollTopComponent,
    WishlistPopupComponent,
    ProductCardComponent,
    SalePricePipe,
    SkeletonComponent,
    RecommendedProductsComponent,
    RecommendedProductCardComponent,
    CartItemComponent,
    SearchComponent,
    SearchResultCardComponent,
    PaginatorComponent,
    ProductDealCardComponent
  ],
  exports:[
    MiniHeaderComponent,
    HeaderComponent,
    FooterComponent,
    LanguageSwitcherComponent,
    MenuPopupComponent,
    BannerItemComponent,
    SellingProductCardComponent,
    ScrollTopComponent,
    WishlistPopupComponent,
    ProductCardComponent,
    SalePricePipe,
    SkeletonComponent,
    RecommendedProductsComponent,
    RecommendedProductCardComponent,
    CartItemComponent,
    SearchComponent,
    SearchResultCardComponent,
    PaginatorComponent,
    ProductDealCardComponent
  ]
})
export class SharedModule { }
