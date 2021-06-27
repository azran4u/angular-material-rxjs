import { createSelector } from '@ngrx/store';
import { selectUsersState } from '../../blog.state';
import { UsersState } from './user.model';
import * as _ from 'lodash';

export const selectPostsIds = createSelector(
  selectUsersState,
  (state: UsersState) => {
    let postsIds: string[] = [];
    state.users.forEach((user) => {
      postsIds = _.concat(postsIds, user.posts);
    });
    postsIds = _.uniq(postsIds);
    postsIds = postsIds.filter((post) => post !== null && post !== undefined);
    postsIds = postsIds.sort();
    return postsIds;
  }
);
