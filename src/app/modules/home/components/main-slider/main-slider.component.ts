import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SliderService } from '../../../core/services/slider.service';
import { SlideItemComponent } from '../slide-item/slide-item.component';
import { Slide } from '../../../core/models/Slide';
import { IndexedDBService } from '../../../core/services/indexeddb.service';

@Component({
  selector: 'Gosto-main-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule, SlideItemComponent],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss',
})
export class MainSliderComponent implements OnInit {

  slidesService = inject(SliderService);
  indexedDBService = inject(IndexedDBService);

  slides: Slide[] = []
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    rtl: true,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  ngOnInit(): void {
    this.loadSlides()
  }

  async loadSlides() {
    const cachedSlides = await this.indexedDBService.getSlides('slider-images');
    if (cachedSlides) {
      this.slides = JSON.parse(cachedSlides);
    } else {
      this.slidesService.getSlidesData().subscribe(async (data) => {
        this.slides = data;
        await this.indexedDBService.setSlides('slider-images', JSON.stringify(data));
      })
    }
  }

}
