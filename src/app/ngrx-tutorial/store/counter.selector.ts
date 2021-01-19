import { createSelector } from '@ngrx/store';
import { CountState, CountStore } from './count.model';

export const getCounter = createSelector(
  (state: CountStore) => state.count,
  (state: CountState) => state.counter
);
