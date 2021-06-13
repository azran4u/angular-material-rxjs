import { createAction, props } from '@ngrx/store';
import { UsersChangesSubscriptionFilter } from '../model/usersChangesSubscriptionFilter';
import { UserUpdate } from '../model/userUpdate';

export enum UserActions {
  BLOG_USER_DATA_UPDATE = '[BLOG_USER] DataUpdate',
  BLOG_USER_MODULE_LOADED = '[BLOG_USER] LOADED',
  BLOG_USER_MODULE_CLOSED = '[BLOG_USER] CLOSED',
}

export const dataUpdate = createAction(
  UserActions.BLOG_USER_DATA_UPDATE,
  props<UserUpdate>()
);
export const loaded = createAction(
  UserActions.BLOG_USER_MODULE_LOADED,
  props<{ filter: UsersChangesSubscriptionFilter }>()
);
export const closed = createAction(UserActions.BLOG_USER_MODULE_CLOSED);
