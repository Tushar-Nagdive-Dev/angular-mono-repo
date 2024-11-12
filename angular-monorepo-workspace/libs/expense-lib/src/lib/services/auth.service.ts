import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
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
  ) {
    this.loadToken();
  }

  private loadToken() {
    const token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.token = token;
    } else {
      this.token = null;
      localStorage.removeItem('token');
    }
  }

  isAuthenticated(): boolean {
    this.loadToken();  // Ensure the token is loaded and checked each time
    if (this.token && this.jwtHelper.isTokenExpired(this.token)) {
      this.token = null;
      localStorage.removeItem('token');
    }
    return this.token != null;
  }

  getToken(): string | null {
    this.loadToken();  // Ensure the token is loaded and checked each time
    return this.token;
  }

  setToken(token: string | null) {
    this.token = token;
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  login(credentials: Credentials) {
    return this.http.post(this.AUTH_BASE_URL + '/login', credentials).pipe(
      tap((response: any) => {
        this.setToken(response.token);
        console.log('Token received and set:', this.token);
      })
    );
  }

  register(user: User) {
    return this.http.post(this.AUTH_BASE_URL + '/register', user);
  }

  logout() {
    this.setToken(null);
    return true;
  }
}
