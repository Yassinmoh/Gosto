import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'Gosto-recommended-product-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './recommended-product-card.component.html',
  styleUrl: './recommended-product-card.component.scss'
})
export class RecommendedProductCardComponent {
  @Input() product!:Product
}
