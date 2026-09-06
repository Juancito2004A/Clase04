import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();
  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((error: unknown) => {
      const isAuthRoute = req.url.includes('/api/auth/login') || req.url.includes('/api/auth/register');
      if (error instanceof HttpErrorResponse && error.status === 401 && !isAuthRoute) {
        authService.logout();
      }
      return throwError(() => error);
    })
  );
};
