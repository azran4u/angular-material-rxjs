import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FetchResult } from 'apollo-link';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';
import { BlogState } from '../../blog.state';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';
import { fetchUsersByIds } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private store: Store<BlogState>
  ) {}

  fetchUsersByIds$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fetchUsersByIds),
        tap((payload) => {
          console.log(`fetch users by ids:${payload.ids}`);
        }),
        map((payload) => {
          this.userService.getUsersByIds(payload.ids);
        }),
        catchError((error: HttpErrorResponse) => {
          console.error(`getUsersByIds error ${error.message}`);
          return EMPTY;
        })
      ),
    { dispatch: false }
  );

  subscribeTiUsersChanges$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fetchUsersByIds),
        tap((payload) => {
          console.log(`subscribe to users by ids:${payload.ids}`);
        }),
        switchMap((payload) =>
          this.userService
            .usersSubscription({ ids: payload.ids, age: undefined })
            .pipe(
              tap((res) =>
                console.log(
                  `user subscription data: updated ${res.data.usersChanges.updated} deleted ${res.data.usersChanges.deleted}`
                )
              ),
              catchError((error: HttpErrorResponse) => {
                console.error(`user effect error ${error.message}`);
                return EMPTY;
              })
            )
        )
      ),
    { dispatch: false }
  );
}
