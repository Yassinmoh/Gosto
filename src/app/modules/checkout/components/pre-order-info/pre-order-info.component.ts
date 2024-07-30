import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AccordionModule } from 'primeng/accordion';
import { ShippingState } from '../../../../store/Shipping/shipping.reducer';
import { CartState } from '../../../../store/Cart/cart.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'Gosto-pre-order-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AccordionModule,RouterModule],
  templateUrl: './pre-order-info.component.html',
  styleUrl: './pre-order-info.component.scss'
})
export class PreOrderInfoComponent {

  _store = inject(Store<ShippingState | CartState>);
  _fb = inject(FormBuilder);

  total$!:Observable<number>;
  subtotal$!:Observable<number>;

}
