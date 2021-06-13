import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
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
            catchError((error) => {
              console.error(`user effect error ${error}`);
              return EMPTY;
            })
          )
        )
      ),
    { dispatch: false }
  );
}
