import { createAction, props } from '@ngrx/store';

export const requestLogin = createAction('[Auth] Login');
export const requestLoginSuccess = createAction(
  '[Auth] Login success',
  props<{ token: string }>()
);
export const requestLoginFail = createAction('[Auth] Login fail');
export const requestRegister = createAction('[Auth] Register');
export const requestRegisterSuccess = createAction('[Auth] Register success');
export const requestRegisterFail = createAction('[Auth] Register fail');
export const requestLogout = createAction('[Auth] Logout');
export const requestLogoutSuccess = createAction('[Auth] Logout success');
