import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { SalePricePipe } from '../../../pipes/sale-price.pipe';
import { MaxlengthPipe } from '../../../pipes/maxlength.pipe';
import { RouterModule } from '@angular/router';
import { LazyloadDirective } from '../../../directives/lazyload.directive';

@Component({
  selector: 'Gosto-product-deal-card',
  standalone: true,
  imports: [CommonModule,SalePricePipe,MaxlengthPipe,RouterModule,LazyloadDirective],
  templateUrl: './product-deal-card.component.html',
  styleUrl: './product-deal-card.component.scss'
})
export class ProductDealCardComponent {
  @Input() product!:Product
}
