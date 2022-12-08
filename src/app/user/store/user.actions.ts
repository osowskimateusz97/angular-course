import { createAction, props } from '@ngrx/store';
import { UserState } from './user.reducer';

export const requestCurrentUser = createAction('[Request] User');

export const requestCurrentUserSuccess = createAction(
  '[Request Success] User',
  props<{ user: UserState }>()
);

export const requestCurrentUserFail = createAction('[Request Fail] User');
