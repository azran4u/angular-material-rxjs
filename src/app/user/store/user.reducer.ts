import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './user.actions';
import { UsersState } from './user.store.model';



export const initialState: UsersState = {
  users: []
};

export const usersReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 }))
);
