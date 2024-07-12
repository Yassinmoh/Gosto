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
    RecommendedProductsComponent
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
    RecommendedProductsComponent
  ]
})
export class SharedModule { }
