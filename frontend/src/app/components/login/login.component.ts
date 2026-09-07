import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { resolveHttpError } from '../../utils/http-error';
import { UI_COPY } from '../../utils/ui-copy';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginMode = true;
  loading = false;
  error: string | null = null;
  success: string | null = null;

  loginForm = {
    email: '',
    pass: ''
  };

  registerForm = {
    name: '',
    email: '',
    pass: '',
    passConfirm: ''
  };

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/products']);
    }
  }

  setMode(isLogin: boolean): void {
    this.isLoginMode = isLogin;
    this.clearFeedback();
  }

  toggleMode(): void {
    this.setMode(!this.isLoginMode);
  }

  onSubmit(): void {
    this.clearFeedback();

    if (this.isLoginMode) {
      this.handleLogin();
      return;
    }

    this.handleRegister();
  }

  private handleLogin(): void {
    const { email, pass } = this.loginForm;
    if (!email || !pass) {
      this.error = UI_COPY.requiredFields;
      return;
    }

    this.loading = true;
    this.authService.login(email, pass).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/products']);
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        this.error = resolveHttpError(err, UI_COPY.loginFailed);
      }
    });
  }

  private handleRegister(): void {
    const { name, email, pass, passConfirm } = this.registerForm;
    if (!name || !email || !pass || !passConfirm) {
      this.error = UI_COPY.requiredFields;
      return;
    }

    if (pass !== passConfirm) {
      this.error = UI_COPY.credentialMismatch;
      return;
    }

    if (pass.length < 6) {
      this.error = UI_COPY.credentialTooShort;
      return;
    }

    this.loading = true;
    this.authService.register(email, name, pass).subscribe({
      next: () => {
        this.loading = false;
        this.success = UI_COPY.registerOk;
        this.loginForm.email = email;
        this.resetPassFields();
        setTimeout(() => this.setMode(true), 1500);
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        this.error = resolveHttpError(err, UI_COPY.registerFailed);
      }
    });
  }

  private clearFeedback(): void {
    this.error = null;
    this.success = null;
  }

  private resetPassFields(): void {
    this.loginForm.pass = String();
    this.registerForm.pass = String();
    this.registerForm.passConfirm = String();
  }
}
