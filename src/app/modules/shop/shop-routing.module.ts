import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';

const routes: Routes = [
  {
    path:'',
    component:ShopPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
