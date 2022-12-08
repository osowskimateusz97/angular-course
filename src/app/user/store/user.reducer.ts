import { createReducer, on, Action } from '@ngrx/store';
import * as UserAction from './user.actions';

export interface UserState {
  isAdmin: boolean;
  name: string;
}

export const initialState: UserState = {
  isAdmin: false,
  name: 'Matt',
};

const reducer = createReducer(
  initialState,
  on(UserAction.requestCurrentUserSuccess, (state, { user }) => ({
    ...state,
    user,
  }))
);

export const userReducer = (state: UserState, action: Action): UserState =>
  reducer(state, action);
