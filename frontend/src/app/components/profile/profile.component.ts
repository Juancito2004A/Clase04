import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { resolveHttpError } from '../../utils/http-error';
import { UI_COPY } from '../../utils/ui-copy';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profile: User | null = null;
  error: string | null = null;
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
        this.error = resolveHttpError(err, UI_COPY.profileLoadFailed);
        this.loading = false;
      }
    });
  }
}
