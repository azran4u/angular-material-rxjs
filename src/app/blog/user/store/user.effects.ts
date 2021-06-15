import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, switchMap, tap } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { loaded } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UsersService) {}

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
                  tap((res) =>
                    console.log(
                      `user effect fetched users ${JSON.stringify(
                        res.data.getUsersByIds
                      )}`
                    )
                  ),
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
