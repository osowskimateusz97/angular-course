import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from '../auth/store/auth.reducer';
import { userReducer } from '../user/store/user.reducer';

interface State {}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  auth: authReducer,
};
export const effects = [];
