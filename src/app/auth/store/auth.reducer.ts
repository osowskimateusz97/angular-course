import { createReducer, on, Action } from '@ngrx/store';
import * as AuthAction from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  isAuthorized: boolean;
  token: string | null;
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthorized: false,
  token: null,
  errorMessage: null,
};

const reducer = createReducer(
  initialState,
  on(AuthAction.requestLoginSuccess, (state, { token }) => ({
    ...state,
    isAuthorized: true,
    token,
    errorMessage: null,
  })),
  on(AuthAction.requestLogoutSuccess, (state) => ({
    ...state,
    isAuthorized: false,
    token: null,
    errorMessage: null,
  }))
);

export const authReducer = (state: AuthState, action: Action): AuthState =>
  reducer(state, action);
