import { createReducer, on } from '@ngrx/store';
import { CountState } from './count.model';
import { increment, decrement, reset } from './counter.actions';



export const initialState: CountState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 }))
);
