import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { CommonModule } from '@angular/common';
import { SalePricePipe } from '../../../pipes/sale-price.pipe';

@Component({
  selector: 'Gosto-product-card',
  standalone: true,
  imports: [CommonModule,SalePricePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product
}
