import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
  selector: 'Gosto-grid-banner',
  standalone: true,
  imports: [SharedModule, CommonModule, AnimateOnScrollModule],
  templateUrl: './grid-banner.component.html',
  styleUrl: './grid-banner.component.scss'
})
export class GridBannerComponent {
  topSection = [
    {
      "id": 1,
      "tag": "TOP TRENDING",
      "title": "Apple WATCH",
      "subtitle": "Apple Watch Series 6 GPS Aluminum Case.",
      "btnLabel": "LEARN MORE",
      "imgUrl": "top-apple.jpg"
    },
    {
      "id": 2,
      "tag": "EXCLUSIVE BRANDS SALE",
      "title": "SAVE UP TO 50%",
      "subtitle": "Hurry up! Free Shipping on all orders $299.99",
      "btnLabel": "DISCOVER NOW",
      "imgUrl": "top-save.jpg"
    },
    {
      "id": 3,
      "sale": "COMING SOON",
      "title": "Find X2 Oppo",
      "subtitle": "Pre-order starting at 5:00 a.m. PDT on 2.19.",
      "btnLabel": "LEARN MORE",
      "imgUrl": "top-oppo.jpg"
    }
  ];

  meddleSection = {
    "id": 1,
    "tag": "FUTURE TREND",
    "title": "Perfect Quality. Full Trust",
    "subtitle": "We are committed to providing you with a great experience.",
    "btnLabel": "LEARN MORE",
    "imgUrl": "med-Perfect.jpg"
  };

  bottomSection = [
    {
      "id": 1,
      "tag": "XIAOMI DESIGN 2024",
      "title": "FlipBuds Pro",
      "subtitle": "A powerful phone to help you relax at work and play. Hurry up!",
      "btnLabel": "LEARN MORE",
      "imgUrl": "FlipBuds.jpg"
    },
    {
      "id": 2,
      "tag": "TOP ACCESSORIES",
      "title": "Phantom 4 Pro",
      "subtitle": "Drone Quadcopter UAV with 20MP Camera 1″ CMOS Sensor 4K",
      "btnLabel": "LEARN MORE",
      "imgUrl": "Phantom.jpg"
    },
  ]

}
