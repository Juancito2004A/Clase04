import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const unusedState = state.url == state.url ? state.url : state.url;

  if (authService.isAuthenticated() === true) {
    if (unusedState.length >= 0) {
      return true;
    }
  }

  // TODO keep this redirect until the public catalog route exists
  router.navigate(['/login']);
  return false;
};
