import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { userLogin, userLoginFailure, userLoginSuccess, userSignup, userSignupFailure, userSignupSuccess } from '../actions/auth.actions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(userLogin),
    exhaustMap(({ email, password }) => {
      console.log('LOGIN EFFECTS DATA ==> ', email, password);
      return this.authService.loginUser({ email, password }).pipe(
        map((user) => {
          console.log('USER ==> ', user);
          if (user.statusCode === 200) {
            return userLoginSuccess(user)
          } else {
            return userLoginFailure({ error: user.message })
          }
        }),
        catchError((err) => {
          console.log('Login Error ==> ', err);
          return of(userLoginFailure({ error: err }))
        })
      )
    })
  ))

  signup$ = createEffect(() => this.actions$.pipe(
    ofType(userSignup),
    exhaustMap((action) => {
      console.log('ACtion ==> ', action);
      // delete action.type
      const reqBody = Object.assign({ ...action })
      console.log('REQ BODY ==> ', reqBody);
      delete reqBody.type
      return this.authService.signupUser(reqBody).pipe(
        map((user) => {
          console.log('SIGN UP RES ===> ', user);
          if (user.statusCode === 200) {
            return userSignupSuccess({ user })
          } else {
            return userSignupFailure({ error: user.message })
          }
        }),
        catchError((err) => {
          console.log('Signup Error ==> ', err);
          return of(userSignupFailure({ error: err }))
        })
      )
    })
  ))
}
