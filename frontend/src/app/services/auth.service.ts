import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthResponse, RegisterResponse, User } from '../models/user.model';

const SESSION_ID_STORAGE = 'session.id';
const SESSION_PROFILE_STORAGE = 'session.profile';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/api/auth`;

  readonly currentUser = signal<User | null>(null);
  readonly isAuthenticated = computed(() => this.currentUser() !== null);

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
    this.loadSession();
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response) => this.persistSession(response.data.access_token, response.data.user))
    );
  }

  register(email: string, name: string, password: string): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseUrl}/register`, { email, name, password });
  }

  me(): Observable<{ data: User }> {
    return this.http.get<{ data: User }>(`${this.baseUrl}/me`);
  }

  logout(): void {
    this.clearSession();
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(SESSION_ID_STORAGE);
  }

  private persistSession(token: string, user: User): void {
    localStorage.setItem(SESSION_ID_STORAGE, token);
    localStorage.setItem(SESSION_PROFILE_STORAGE, JSON.stringify(user));
    this.currentUser.set(user);
  }

  private loadSession(): void {
    try {
      const token = localStorage.getItem(SESSION_ID_STORAGE);
      const userJson = localStorage.getItem(SESSION_PROFILE_STORAGE);
      if (token && userJson) {
        this.currentUser.set(JSON.parse(userJson) as User);
      }
    } catch {
      this.clearSession();
    }
  }

  private clearSession(): void {
    localStorage.removeItem(SESSION_ID_STORAGE);
    localStorage.removeItem(SESSION_PROFILE_STORAGE);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
