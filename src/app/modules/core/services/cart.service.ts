import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();


  addToCart(product: any) {
    const currentCart = this.cart.value;
    const updatedCart = [...currentCart, product];
    this.cart.next(updatedCart);
  }

  removeFromCart(product: any) {
    const currentCart = this.cart.value;
    const updatedCart = currentCart.filter(p => p !== product);
    this.cart.next(updatedCart);
  }

  getCart(): Observable<any[]> {
    return this.cart$;
  }

  resetCart() {
    this.cart.next([]);
  }
}
