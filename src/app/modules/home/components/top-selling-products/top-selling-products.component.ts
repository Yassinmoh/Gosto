import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SellingProductCardComponent } from '../../../shared/components/cards/selling-product-card/selling-product-card.component';

@Component({
  selector: 'Gosto-top-selling-products',
  standalone: true,
  imports: [CommonModule,SellingProductCardComponent],
  templateUrl: './top-selling-products.component.html',
  styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent {

}
