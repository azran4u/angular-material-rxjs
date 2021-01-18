import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './ngrx-tutorial.actions';

export interface CountState {
  counter: number;
}

export interface CountStore {
  count: CountState;
}

export const initialState: CountState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 }))
);
