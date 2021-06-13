import { createReducer, on } from '@ngrx/store';
import { User } from '../model/user.model';
import { dataUpdate } from './user.actions';
import { UsersState } from './user.model';
import { produce } from 'immer';

const initialState: UsersState = {
  users: new Map<string, User>(),
};

export const userReducer = createReducer(
  initialState,
  on(dataUpdate, (state, payload) => {
    return produce(state, (draft) => {
      payload.deleted.map((id) => draft.users.delete(id));
      payload.updated.map((user) => draft.users.set(user.id, user));
    });
  })
);
