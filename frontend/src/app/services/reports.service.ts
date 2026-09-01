import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export type StockStatus = 'out' | 'low' | 'ok';

export interface ReportSummary {
  total: number;
  lowStock: number;
  outOfStock: number;
  inventoryValue: number;
  statuses: StockStatus[];
}

export interface ReportMatch {
  id: number;
  name: string;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ReportsService {
  private readonly baseUrl = `${environment.apiUrl}/api/reports`;

  constructor(private readonly http: HttpClient) {}

  summary(): Observable<{ data: ReportSummary }> {
    return this.http.get<{ data: ReportSummary }>(`${this.baseUrl}/summary`);
  }

  search(term: string): Observable<{ data: ReportMatch[] }> {
    const params = new HttpParams().set('q', term.trim());
    return this.http.get<{ data: ReportMatch[] }>(`${this.baseUrl}/search`, { params });
  }
}
