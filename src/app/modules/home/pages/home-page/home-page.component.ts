import { Component, inject, OnInit } from '@angular/core';
import { MainSliderComponent } from '../../components/main-slider/main-slider.component';
import { GridBannerComponent } from '../../components/grid-banner/grid-banner.component';
import { TopSellingProductsComponent } from '../../components/top-selling-products/top-selling-products.component';

@Component({
  selector: 'Gosto-home-page',
  standalone: true,
  imports: [MainSliderComponent,GridBannerComponent,TopSellingProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
