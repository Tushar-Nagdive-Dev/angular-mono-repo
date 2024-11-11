import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs';
import { Credentials, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly AUTH_BASE_URL = 'https://localhost:1111/api/auth';
  private token: string | null = null;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  isAuthenticated(): boolean {
    return this.token != null && !this.jwtHelper.isTokenExpired(this.token);
  }

  getToken(): string | null {
    return this.token;
  }

  login(credentials: Credentials) {
    return this.http.post(this.AUTH_BASE_URL+'/login', credentials).pipe(
      tap((response:any) => this.token = response.token)
    );
  }
  
  register(user: User) {
    return this.http.post(this.AUTH_BASE_URL+'/register', user);
  }
}
