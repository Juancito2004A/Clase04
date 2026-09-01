import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: User | null = null;
  error = '';
  loading = false;

  constructor(public readonly authService: AuthService) {}

  ngOnInit(): void {
    this.profile = this.authService.currentUser();
    this.loading = true;
    this.authService.me().subscribe({
      next: (response) => {
        this.profile = response.data;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.error?.error || 'No se pudo cargar el perfil';
        this.loading = false;
      }
    });
  }
}
