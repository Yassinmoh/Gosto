import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { getSubTotal } from '../../../../store/Cart/cart.selectors';
import { map, Observable, of, tap } from 'rxjs';


@Component({
  selector: 'Gosto-progress-bar-gift',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar-gift.component.html',
  styleUrl: './progress-bar-gift.component.scss'
})
export class ProgressBarGiftComponent implements OnInit {
  currentSubtotal$: Observable<number> = of(0);
  percentage$: Observable<number> = of(0)
  targetCount: number = 2500;
  isReachToGift: boolean = false;
  coupon!: string

  _store = inject(Store<CartState>)
  // _toster = inject()


  ngOnInit(): void {
    this.calculateProgressPercentage()
  }

  calculateProgressPercentage() {
    this.currentSubtotal$ = this._store.select(getSubTotal)
    this.percentage$ = this.currentSubtotal$.pipe(
      map((subtotal) => (subtotal / this.targetCount) * 100),
      tap(currentPercentage => {
        if (currentPercentage >= 100) {
          this.generateCoupon()
        }
        return this.isReachToGift = currentPercentage >= 100;
      })
    );
  }

  generateCoupon() {
    this.coupon = `COUPON-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
    return this.coupon;
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(()=>{
      console.log('Copied to clipboard:', text);
    }).catch((error)=>{
      console.log('something went wrong:', error);
    })
  }
}
