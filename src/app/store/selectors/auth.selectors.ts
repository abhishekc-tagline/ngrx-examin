import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAuthState = (state:any) => state.auth

export interface AuthState {
    user: any | null;
}
export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
    return state.user ? true : false;
})