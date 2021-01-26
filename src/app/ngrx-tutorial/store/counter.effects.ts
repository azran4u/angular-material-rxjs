import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, interval } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { CounterService } from '../service/counter.service';
import { CounterActions } from './counter.actions';

@Injectable()
export class CounterEffects {
  get$ = createEffect(
    () =>
      interval(1000).pipe(
        mergeMap(() =>
          this.counterService.getCounter().pipe(
            tap((res) =>
              console.log(
                `effect: backend value is ${res.data['getCounter'].value}`
              )
            ),
            catchError((error) => {
              console.error(`effect ${error}`);
              return EMPTY;
            })
          )
        )
      ),
    { dispatch: false }
  );

  increment$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CounterActions.INCREMENT),
        mergeMap(() =>
          this.counterService.increment().pipe(
            tap((res) =>
              console.log(
                `effect: backend increment updated value is ${res.data['incrementCounter'].value}`
              )
            ),
            catchError((error) => {
              console.error(`effect ${error}`);
              return EMPTY;
            })
          )
        )
      ),
    { dispatch: false }
  );

  decrement$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CounterActions.DECREMENT),
        mergeMap(() =>
          this.counterService.decrement().pipe(
            tap((res) =>
              console.log(
                `effect: backend decrement updated value is ${res.data['decrementCounter'].value}`
              )
            ),
            catchError((error) => {
              console.error(`effect ${error}`);
              return EMPTY;
            })
          )
        )
      ),
    { dispatch: false }
  );

  reset$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CounterActions.RESET),
        mergeMap(() =>
          this.counterService.reset().pipe(
            tap((res) =>
              console.log(
                `effect: backend decrement updated value is ${res.data['resetCounter'].value}`
              )
            ),
            catchError((error) => {
              console.error(`effect ${error}`);
              return EMPTY;
            })
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private counterService: CounterService
  ) {}
}
