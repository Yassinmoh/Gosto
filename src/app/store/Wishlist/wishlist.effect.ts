import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { WishlistState } from "./wishlist.reducer";
import * as wishListActions from '../../store/Wishlist/wishlist.actions'
import { of, switchMap, withLatestFrom } from "rxjs";
import { wishListItems } from "./wishlist.selectors";

@Injectable({
  providedIn: 'root'
})

export class WishlistEffect {
  _store = inject(Store<WishlistState>)
  actions$ = inject(Actions)
  categoryEffect$ = createEffect(() =>
  this.actions$.pipe(
    ofType(wishListActions.toggleAddtoWishlist),
    withLatestFrom(this._store.pipe(select(wishListItems))),
    switchMap(([action,wishlistItems])=>{
      const isProductInWishList = wishlistItems.some(item => item.id == action.product.id);
      if(isProductInWishList){
        return of(wishListActions.removeFromWishlist({product:action.product}))
      }else{
        return of(wishListActions.addToWishlist({product:action.product}))
      }
    })
  )
);

}
