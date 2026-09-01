import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface AuthResponse {
  data: {
    access_token: string;
    user: User;
  };
}

export interface RegisterResponse {
  data: User;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/api/auth`;

  // Signals for modern Angular 19 state management
  readonly currentUser = signal<User | null>(null);
  readonly isAuthenticated = computed(() => this.currentUser() !== null);

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
    this.loadSession();
  }

  private loadSession(): void {
    try {
      const token = localStorage.getItem('token');
      const userJson = localStorage.getItem('user');
      if (token && userJson) {
        this.currentUser.set(JSON.parse(userJson));
      }
    } catch {
      this.clearSession();
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response) => {
        const { access_token, user } = response.data;
        localStorage.setItem('token', access_token);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser.set(user);
      })
    );
  }

  register(email: string, name: string, password: string): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, { email, name, password });
  }

  logout(): void {
    this.clearSession();
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  me(): Observable<{ data: User }> {
    return this.http.get<{ data: User }>(`${this.baseUrl}/me`);
  }

  private clearSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('lastLoginPassword');
    localStorage.removeItem('lastLoginEmail');
    this.currentUser.set(null);
  }
}
