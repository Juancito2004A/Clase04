import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReportMatch, ReportSummary, ReportsService } from '../../services/reports.service';
import { resolveHttpError } from '../../utils/http-error';
import { UI_COPY } from '../../utils/ui-copy';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  loading = false;
  error: string | null = null;
  query = String();
  summary: ReportSummary | null = null;
  matches: ReportMatch[] = [];
  headline: string = UI_COPY.inventoryHeadline;

  constructor(private readonly reportsService: ReportsService) {}

  ngOnInit(): void {
    this.loadSummary();
  }

  loadSummary(): void {
    this.loading = true;
    this.error = null;
    this.reportsService.summary().subscribe({
      next: (response) => {
        this.summary = response.data;
        this.headline = this.buildHeadline(response.data.total);
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error = resolveHttpError(err, UI_COPY.reportLoadFailed);
        this.loading = false;
      }
    });
  }

  search(): void {
    this.loading = true;
    this.error = null;
    this.reportsService.search(this.query).subscribe({
      next: (response) => {
        this.matches = response.data;
        this.headline = this.query.trim()
          ? `Búsqueda: ${this.query.trim()}`
          : UI_COPY.inventoryHeadline;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.error = resolveHttpError(err, UI_COPY.reportSearchFailed);
        this.loading = false;
      }
    });
  }

  private buildHeadline(total: number): string {
    if (total === 0) {
      return 'Sin productos';
    }
    if (total <= 5) {
      return 'Catálogo reducido';
    }
    if (total <= 20) {
      return 'Catálogo medio';
    }
    return 'Catálogo amplio';
  }
}
