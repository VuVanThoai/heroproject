import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    console.log('jwt helper', jwtHelper);
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    // Check whether the token is expired and return
    // true or false
    // @ts-ignore
    return !this.jwtHelper.isTokenExpired(token);
  }
}
