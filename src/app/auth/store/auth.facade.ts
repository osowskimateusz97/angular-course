import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from './auth.reducer';
import {
  isUserAuthorized,
  getToken,
  getSpecificErrorMessage,
} from './auth.selectors';
import { requestLogin } from './auth.actions';

@Injectable()
export class UserFacade {
  isAuthorized$ = this.store.select(isUserAuthorized);
  getToken$ = this.store.select(getToken);
  getLoginErrorMessage$ = this.store.select(getSpecificErrorMessage);
  getRegisterErrorMessage$ = this.store.select(getSpecificErrorMessage);

  constructor(private store: Store<AuthState>) {}

  login() {
    this.store.dispatch(requestLogin());
  }
}
