import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
} from '@ngrx/store';
import { AppState } from '../app.state';

import { UsersState } from './user/store/user.model';
import { userReducer } from './user/store/user.reducer';

export const BLOG_FEATURE_NAME = 'blog';

export interface BlogState extends AppState {
  users: UsersState;
}

export const reducers: ActionReducerMap<BlogState> = {
  users: userReducer,
};

export const selectUsersState =
  createFeatureSelector<BlogState, UsersState>('users');
