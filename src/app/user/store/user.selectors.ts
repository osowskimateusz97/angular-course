import { createFeatureSelector, createSelector } from '@ngrx/store/src';
import { UserState } from './user.reducer';

interface AppState {
  user: UserState;
}

const getBookState = createFeatureSelector<AppState>('user');

export const getName = createSelector(
  getBookState,
  (state: AppState) => state.user.name
);
export const isAdmin = createSelector(
  getBookState,
  (state: AppState) => state.user.isAdmin
);
