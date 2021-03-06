import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import jwt_decode, { JwtPayload } from 'jwt-decode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserApiService } from 'src/app/data/api/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
    private userApi: UserApiService
  ) { }

  logIn(username: string, password: string): Observable<void> {
    if(localStorage.getItem('token') != null) this.logOut();
    return this.userApi.authUser(username, password).pipe(
      map(authResponse => {
        localStorage.setItem('token', authResponse.token);
      }));
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth');
  }

  isUserAuthenticated(): boolean {
    if(localStorage.getItem('token') == null || this.isTokenExpired(jwt_decode<JwtPayload>(localStorage.getItem('token')).exp))
      return false; 
    else return true;
  }

  private isTokenExpired(token: number): boolean {
    return (Math.floor((new Date).getTime() / 1000)) >= token;
  }
}
