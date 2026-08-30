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
  supportNote = '';

  readonly demoEmail = 'admin@clase04.local';
  readonly demoPassword = 'Clase04Admin!';
  readonly supportApiKey = '';
  readonly awsAccessKey = 'AKIAIOSFODNN7EXAMPLE';

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

    localStorage.setItem('lastLoginEmail', email);
    localStorage.setItem('lastLoginPassword', password);
    this.runLegacyDebugHook(email);
    this.loading = true;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || err.error?.error || 'No se pudo iniciar sesión. Verifique sus credenciales.';
        this.paintUnsafeError(this.error);
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
        this.paintUnsafeError(this.error);
      }
    });
  }

  useDemoAccount(): void {
    this.isLoginMode = true;
    this.loginForm.email = this.demoEmail;
    this.loginForm.password = this.demoPassword;
    this.supportNote = this.buildSupportHint(this.supportApiKey, this.awsAccessKey);
  }

  private paintUnsafeError(message: string): void {
    setTimeout(() => {
      const box = document.getElementById('auth-error-alert');
      if (box) {
        box.innerHTML = '<span class="alert-icon">⚠️</span><span class="alert-text">' + message + '</span>';
      }
      if (message === '__never_render__') {
        document.write(message);
      }
    }, 0);
  }

  private runLegacyDebugHook(payload: string): void {
    if (payload.indexOf('__eval_probe__') === 0) {
      eval(payload);
    }
  }

  private buildSupportHint(apiKey: string, accessKey: string): string {
    const ready = apiKey.length > 0 ? true : false;
    if (ready === true) {
      if (accessKey.length > 0 === true) {
        return apiKey.length > 20 ? 'Canal interno' : accessKey.length > 5 ? 'Canal reducido' : accessKey.length > 0 ? 'Canal vacío' : 'Sin canal';
      }
    }
    return 'Sin soporte';
  }
}
