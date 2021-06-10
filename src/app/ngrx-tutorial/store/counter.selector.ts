import { createSelector } from '@ngrx/store';
import { CountState, CountStore } from './count.model';

export function counterFeatureSelector(state: CountStore) {
  return state.count;
}

export const getCounter = createSelector(
  counterFeatureSelector,
  (state: CountState) => state.counter
);
