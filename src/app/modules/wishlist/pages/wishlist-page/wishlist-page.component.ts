import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { WishlistGridCardComponent } from '../../components/wishlist-grid-card/wishlist-grid-card.component';
import {WishlistRowComponent } from '../../components/wishlist-row/wishlist-row.component';
import { Store } from '@ngrx/store';
import { WishlistState } from '../../../../store/Wishlist/wishlist.reducer';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product';
import { wishListItems } from '../../../../store/Wishlist/wishlist.selectors';



@Component({
  selector: 'Gosto-wishlist-page',
  standalone: true,
  imports: [CommonModule,WishlistGridCardComponent,WishlistRowComponent],
  templateUrl: './wishlist-page.component.html',
  styleUrl: './wishlist-page.component.scss'
})
export class WishlistPageComponent implements OnInit {


  _store = inject(Store<WishlistState>);

  wishListItems$!:Observable<Product[]>
  ngOnInit(): void {
    this.getWishListItems()
  }

  getWishListItems(){
    this.wishListItems$ = this._store.select(wishListItems)
  }

}
