import { createSelector } from '@ngrx/store';
import { CountState, selectCounterState } from '../ngrxTutorial.state';

export function counterFeatureSelector(state: CountState) {
  return state.counter;
}

export const counterSelector = createSelector(
  selectCounterState,
  (state: CountState) => state.counter
);
