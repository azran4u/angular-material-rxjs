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
import { dataUpdate, loaded, UserActions } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private store: Store<BlogState>
  ) {}

  changes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loaded),
        switchMap((action) =>
          this.userService.usersSubscription(action.filter).pipe(
            tap((res) =>
              console.log(
                `user effect data: updated ${res.data.usersChanges.updated} deleted ${res.data.usersChanges.deleted}`
              )
            ),
            concatMap((res) =>
              this.userService
                .getUsersByIds(res.data.usersChanges.updated)
                .pipe(
                  map<FetchResult<{ getUsersByIds: User[] }>, User[]>((res) => {
                    console.log(
                      `user effect fetched users ${JSON.stringify(
                        res.data.getUsersByIds
                      )}`
                    );
                    return res.data.getUsersByIds;
                  }),
                  tap((res) => {
                    this.store.dispatch(
                      dataUpdate({ updated: res, deleted: [] })
                    );
                  }),
                  catchError((error: HttpErrorResponse) => {
                    console.error(`user effect error ${error.message}`);
                    return EMPTY;
                  })
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
