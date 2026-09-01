import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
  error = '';
  success = '';

  loginForm = {
    email: '',
    password: ''
  };

  registerForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    this.error = '';
    this.success = '';
  }

  toggleMode(): void {
    this.setMode(!this.isLoginMode);
  }

  onSubmit(): void {
    this.error = '';
    this.success = '';

    if (this.isLoginMode) {
      this.handleLogin();
      return;
    }

    this.handleRegister();
  }

  private handleLogin(): void {
    const { email, password } = this.loginForm;
    if (!email || !password) {
      this.error = 'Por favor complete todos los campos';
      return;
    }

    this.loading = true;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/products']);
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        this.error = this.resolveError(err, 'No se pudo iniciar sesión. Verifique sus credenciales.');
      }
    });
  }

  private handleRegister(): void {
    const { name, email, password, confirmPassword } = this.registerForm;
    if (!name || !email || !password || !confirmPassword) {
      this.error = 'Por favor complete todos los campos';
      return;
    }

    if (password !== confirmPassword) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    if (password.length < 6) {
      this.error = 'La contraseña debe tener al menos 6 caracteres';
      return;
    }

    this.loading = true;
    this.authService.register(email, name, password).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Registro exitoso. Ahora puede iniciar sesión.';
        this.loginForm.email = email;
        this.loginForm.password = '';
        setTimeout(() => this.setMode(true), 1500);
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        this.error = this.resolveError(err, 'No se pudo registrar el usuario');
      }
    });
  }

  private resolveError(err: HttpErrorResponse, fallback: string): string {
    return err.error?.message || err.error?.error || fallback;
  }
}
