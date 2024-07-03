import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ProductDeatilsComponent } from './pages/product-deatils/product-deatils.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:ShopPageComponent,
        data: {breadcrumb: 'Shop'},
      },
      {
        path:'product/:id',
        component:ProductDeatilsComponent,
        data: {breadcrumb: 'Product'},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
