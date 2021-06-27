import { createAction, props } from '@ngrx/store';
import { ID, Ids } from '../model/ids';
import { UsersChangesSubscriptionFilter } from '../model/usersChangesSubscriptionFilter';
import { UserUpdate } from '../model/userUpdate';

export enum UserActions {
  FETCH_USERS_BY_IDS = '[BLOG_USER] FETCH_USERS_BY_IDS',
  REMOVE_USERS_BY_IDS = '[BLOG_USER] LOADED',
  GET_USERS_BY_IDS = '[BLOG_USER] CLOSED',
}

export const fetchUsersByIds = createAction(
  UserActions.FETCH_USERS_BY_IDS,
  props<ID>()
);
// export const loadUserDataByFilter = createAction(
//   UserActions.BLOG_USER_MODULE_LOADED,
//   props<{ filter: UsersChangesSubscriptionFilter }>()
// );
// export const closed = createAction(UserActions.BLOG_USER_MODULE_CLOSED);
