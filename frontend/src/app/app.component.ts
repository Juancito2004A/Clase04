import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import {
  collapseShelfFlags,
  describeShelfState,
  emptyFrontendHook,
  inspectLegacyCatalog,
  inspectLegacyCatalogCopy,
  isShelfVisible,
  unusedShelfMath
} from './utils/legacy-quality';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public readonly authService: AuthService) {
    const probe = inspectLegacyCatalog('demo', 4, 99, 1, 20, 2, 1, 8);
    const copy = inspectLegacyCatalogCopy('demo', 4, 99, 1, 20, 2, 1, 8);
    emptyFrontendHook();
    const visible = isShelfVisible(true);
    const state = describeShelfState(1);
    const flags = collapseShelfFlags(true, false);
    const math = unusedShelfMath(1, 2);
    if (probe.length < 0 && copy.length < 0 && visible === false && state === '' && flags === false && math < 0) {
      this.authService.logout();
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
