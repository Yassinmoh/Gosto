import { Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/core/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children:[
      {
        path:'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'shop',
        loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule)
      },
      {
        path:'cart',
        loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
      },
      {
        path:'checkout',
        loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule)
      },
      {
        path:'wishlist',
        loadChildren: () => import('./modules/wishlist/wishlist.module').then(m => m.WishlistModule)
      },
    ]
  }
];
