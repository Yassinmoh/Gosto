import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { RouterModule } from '@angular/router';
import { LazyloadDirective } from '../../../directives/lazyload.directive';

@Component({
  selector: 'Gosto-search-result-card',
  standalone: true,
  imports: [RouterModule,LazyloadDirective],
  templateUrl: './search-result-card.component.html',
  styleUrl: './search-result-card.component.scss'
})
export class SearchResultCardComponent {

  @Input() product!:Product;
  @Output() closedSearchResult  =new EventEmitter<boolean>();

  clickProduct(){
    this.closedSearchResult.emit(true);
  }
}
