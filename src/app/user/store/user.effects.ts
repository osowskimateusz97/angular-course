import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import {
  requestCurrentUser,
  requestCurrentUserSuccess,
  requestCurrentUserFail,
} from './user.actions';

@Injectable()
export class MovieEffects {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestCurrentUser),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map(({ result }) =>
            requestCurrentUserSuccess({
              user: { name: result.name, isAdmin: result.role === 'admin' },
            })
          ),
          catchError(() => of(requestCurrentUserFail()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
