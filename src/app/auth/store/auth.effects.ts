import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import {
  requestLogin,
  requestLoginFail,
  requestLoginSuccess,
} from './auth.actions';

@Injectable()
export class MovieEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLogin),
      mergeMap(() =>
        this.authService.login().pipe(
          map((token) =>
            requestLoginSuccess({
              token,
            })
          ),
          catchError(() => of(requestLoginFail()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
