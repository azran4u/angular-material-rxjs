import { createAction } from '@ngrx/store';

export enum CounterActions {
  INCREMENT = '[Counter] Increment',
  DECREMENT = '[Counter] Decrement',
  RESET = '[Counter] Reset'  
}

export const increment = createAction(CounterActions.INCREMENT);
export const decrement = createAction(CounterActions.DECREMENT);
export const reset = createAction(CounterActions.RESET);
