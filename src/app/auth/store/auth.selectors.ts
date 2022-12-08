import { createFeatureSelector, createSelector } from '@ngrx/store/src';
import { AuthState } from './auth.reducer';

interface AppState {
  auth: AuthState;
}

const getAuthState = createFeatureSelector<AppState>('auth');

export const isUserAuthorized = createSelector(
  getAuthState,
  (state: AppState) => state.auth.isAuthorized
);
export const getToken = createSelector(
  getAuthState,
  (state: AppState) => state.auth.token
);

export const getSpecificErrorMessage = createSelector(
  getAuthState,
  (state: AppState) => state.auth.errorMessage
);
