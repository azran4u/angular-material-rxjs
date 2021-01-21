import { createSelector } from '@ngrx/store';
import { CountState, CountStore } from './user.store.model';

export const getCounter = createSelector(
  (state: CountStore) => state.count,
  (state: CountState) => state.counter
);
