import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as OrderActions from './order.actions';

@Injectable()
export class OrderEffects {

  actions$ = inject(Actions)
  placeOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.placeOrder),
      mergeMap(() =>
        of({}).pipe(
          map(()=> OrderActions.placeOrderSuccess({order:{id:new Date().getTime(),status:'success'}})),
          catchError((error)=> of(OrderActions.placeOrderFailure({error:error})))
        )
      )
    )
  )
}
