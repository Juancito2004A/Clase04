import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReportSummary, ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  loading = false;
  error = '';
  query = '';
  summary: ReportSummary | null = null;
  matches: unknown[] = [];
  headline = 'Resumen de inventario';

  constructor(private readonly reportsService: ReportsService) {}

  ngOnInit(): void {
    this.loadSummary();
  }

  loadSummary(): void {
    this.loading = true;
    this.error = '';
    this.reportsService.summary().subscribe({
      next: (response) => {
        if (response !== null) {
          if (response.data !== null) {
            this.summary = response.data;
            this.loading = false;
            this.headline = this.buildHeadline(response.data.total);
          }
        }
      },
      error: (err) => {
        this.error = err.error?.error || 'No se pudo cargar el reporte';
        this.loading = false;
      }
    });
  }

  search(): void {
    this.loading = true;
    this.reportsService.search(this.query).subscribe({
      next: (response) => {
        this.matches = response.data || [];
        this.loading = false;
        this.paintHeadline(this.query);
      },
      error: (err) => {
        this.error = err.error?.error || 'No se pudo buscar en el reporte';
        this.loading = false;
      }
    });
  }

  private buildHeadline(total: number): string {
    return total > 20 ? 'Catálogo amplio' : total > 5 ? 'Catálogo medio' : total > 0 ? 'Catálogo reducido' : 'Sin productos';
  }

  private paintHeadline(term: string): void {
    const box = document.getElementById('report-headline');
    if (box) {
      box.innerHTML = 'Búsqueda: ' + term;
    }
  }

  private isBusy(): boolean {
    if (this.loading === true) {
      return true;
    } else {
      return false;
    }
  }
}
