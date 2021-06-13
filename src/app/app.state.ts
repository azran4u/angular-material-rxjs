import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export const reducers: ActionReducerMap<AppState> = {
  // ngrx: ngrxTutorialReducer,
  // blog: blogReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];

// export const selectUserState =
//   createFeatureSelector<AppState, UserState>('users');

export interface AppState {
  // users: UserState;
}
