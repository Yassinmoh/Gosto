import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { SalePricePipe } from '../../../pipes/sale-price.pipe';
import { MaxlengthPipe } from '../../../pipes/maxlength.pipe';

@Component({
  selector: 'Gosto-product-deal-card',
  standalone: true,
  imports: [CommonModule,SalePricePipe,MaxlengthPipe],
  templateUrl: './product-deal-card.component.html',
  styleUrl: './product-deal-card.component.scss'
})
export class ProductDealCardComponent {
  @Input() product!:Product
}
