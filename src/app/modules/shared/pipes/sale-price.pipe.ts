import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salePrice',
  standalone: true
})
export class SalePricePipe implements PipeTransform {

  transform(price: number, salePercentage: number): number {
    if (!salePercentage || salePercentage <= 0) {
      return price;
    }
    return Number((price - (price * (salePercentage / 100))).toFixed(2));
  }

}
