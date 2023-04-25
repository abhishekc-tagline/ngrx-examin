import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Sigup, UserSignupData } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userURL = `${environment.baseURL}users`;

  constructor(private http: HttpClient) { }

  signupUser(reqBody: UserSignupData): Observable<Sigup> {
    return this.http.post<Sigup>(`${this.userURL}/SignUp`, reqBody);
  }

  // loginUser(body: { email: string; password: string; }): Observable<Login> {
  //   return this.http.post<Login>(`${this.userURL}/Login`, body);
  // }
  loginUser(reqBody: any): Observable<any> {
    return this.http.post<Login>(`${this.userURL}/Login`, reqBody);
  }
}
