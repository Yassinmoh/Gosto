import { Component, inject, OnInit } from '@angular/core';
import { MainSliderComponent } from '../../components/main-slider/main-slider.component';
import { GridBannerComponent } from '../../components/grid-banner/grid-banner.component';
import { TopSellingProductsComponent } from '../../components/top-selling-products/top-selling-products.component';
import { DailyDealsComponent } from '../../components/daily-deals/daily-deals.component';
import { ScrollToTopDirective } from '../../../shared/directives/scroll-to-top.directive';

@Component({
  selector: 'Gosto-home-page',
  standalone: true,
  imports: [MainSliderComponent,GridBannerComponent,TopSellingProductsComponent,DailyDealsComponent,ScrollToTopDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {}
