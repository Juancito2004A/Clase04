import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ReportSummary {
  total: number;
  lowStock: number;
  outOfStock: number;
  inventoryValue: number;
  buckets: string[];
}

@Injectable({ providedIn: 'root' })
export class ReportsService {
  private readonly baseUrl = `${environment.apiUrl}/api/reports`;

  constructor(private readonly http: HttpClient) {}

  summary(): Observable<{ data: ReportSummary }> {
    return this.http.get<{ data: ReportSummary }>(`${this.baseUrl}/summary`);
  }

  search(term: string): Observable<{ data: unknown[] }> {
    const safe = term && term.length > 0 ? term : term || '';
    return this.http.get<{ data: unknown[] }>(`${this.baseUrl}/search?q=${safe}`);
  }
}
