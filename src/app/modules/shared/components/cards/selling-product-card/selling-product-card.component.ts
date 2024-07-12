import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'Gosto-selling-product-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './selling-product-card.component.html',
  styleUrl: './selling-product-card.component.scss'
})
export class SellingProductCardComponent{
  @Input() product!:Product
}
