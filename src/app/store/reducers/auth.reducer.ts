import { createReducer, on } from '@ngrx/store';
import { userLoginSuccess, userLogout, userSignupSuccess } from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
}

export const initialState: State = {
  user: null
};

export const authReducer = createReducer(initialState,
  on(userSignupSuccess, (state, action) => ({
    ...state,
    user: action.user
  })),
  on(userLoginSuccess, (state, action) => ({
    ...state,
    user: action.user
  })),
  on(userLogout, (state, action) => ({
    ...state,
    user: null
  }))
);

export function AuthReducer(state: any, action: any) {
  return authReducer(state, action)
}