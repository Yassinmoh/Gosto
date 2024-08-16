import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrderState } from '../../../../store/Order/order.reducer';
import { Observable, tap } from 'rxjs';
import { getOrderDetails } from '../../../../store/Order/order.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Gosto-orders-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.scss'
})
export class OrdersPageComponent implements OnInit {

  _store = inject(Store<OrderState>)
  order$!: Observable<any>
  orderDetails$!: Observable<any>
  date:any
  ngOnInit(): void {
    this.getOrderDetails()
    this.getCurrentDate()
  }

  getOrderDetails(){
    // this.order$ =  this._store.select(getOrder).pipe(
    //   tap(data => console.log("Order",data))
    // )
    this.orderDetails$ =  this._store.select(getOrderDetails).pipe(
      tap(data => console.log("Billing Details",data))
    )
  }

  getCurrentDate(){
    this.date = new Date()
    return this.date
  }
}
