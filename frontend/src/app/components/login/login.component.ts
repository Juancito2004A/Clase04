import { CommonModule } from '@angular/common';
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

  // Form states
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
    // If already authenticated, redirect to products dashboard
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/products']);
    }
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.error = '';
    this.success = '';
  }

  onSubmit(): void {
    this.error = '';
    this.success = '';

    if (this.isLoginMode) {
      this.handleLogin();
    } else {
      this.handleRegister();
    }
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
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || err.error?.error || 'No se pudo iniciar sesión. Verifique sus credenciales.';
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
        // Auto-fill login email and switch to login mode after 1.5s
        this.loginForm.email = email;
        setTimeout(() => {
          this.isLoginMode = true;
          this.success = '';
        }, 1500);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || err.error?.error || 'No se pudo registrar el usuario';
      }
    });
  }
}
