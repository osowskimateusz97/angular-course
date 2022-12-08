import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from '../user/store/user.reducer';

interface State {}

export const reducers: ActionReducerMap<State> = { user: userReducer };
export const effects = [];
