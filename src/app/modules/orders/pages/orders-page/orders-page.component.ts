import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrderState } from '../../../../store/Order/order.reducer';
import { Observable, tap } from 'rxjs';
import { getOrder } from '../../../../store/Order/order.selectors';

@Component({
  selector: 'Gosto-orders-page',
  standalone: true,
  imports: [],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.scss'
})
export class OrdersPageComponent implements OnInit {

  _store = inject(Store<OrderState>)
  order$!: Observable<any>

  ngOnInit(): void {
    this.getOrderDetails()
  }

  getOrderDetails(){
    this._store.select(getOrder).pipe(
      tap(data => console.log("Order Details",data))
    ).subscribe()
  }
}
