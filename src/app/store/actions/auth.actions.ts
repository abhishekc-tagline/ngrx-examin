import { createAction, props } from '@ngrx/store';
import { Login, Sigup, UserLoginData, UserSignupData } from 'src/app/shared/interfaces/auth';

export const USER_SIGNUP = '[AUTH] User SignUp';
export const USER_SIGNUP_SUCCESS = '[AUTH] User SignUp Success';
export const USER_SIGNUP_FAILURE = '[AUTH] User SignUp Failure';

export const userSignup = createAction(USER_SIGNUP, props<{ user: UserSignupData }>());
export const userSignupSuccess = createAction(USER_SIGNUP_SUCCESS, props<{ user: Sigup }>());
export const userSignupFailure = createAction(USER_SIGNUP_FAILURE, props<{ error: any }>());

export const USER_LOGIN = '[AUTH] User Login';
export const USER_LOGIN_SUCCESS = '[AUTH] User Login Success';
export const USER_LOGIN_FAILURE = '[AUTH] User Login Failure';

export const userLogin = createAction(USER_LOGIN, props<{ email: any, password: any }>());
export const userLoginSuccess = createAction(USER_LOGIN_SUCCESS, props<{ user: Login }>());
export const userLoginFailure = createAction(USER_LOGIN_FAILURE, props<{error: any }>());

export const USER_LOGOUT = '[AUTH] User Logout';
export const userLogout = createAction(USER_LOGOUT);