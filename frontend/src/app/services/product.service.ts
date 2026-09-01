import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductPayload {
  name: string;
  description: string;
  price: number;
  stock: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly baseUrl = `${environment.apiUrl}/api/products`;

  constructor(private readonly http: HttpClient) {}

  list(): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>(this.baseUrl);
  }

  get(id: number): Observable<{ data: Product }> {
    return this.http.get<{ data: Product }>(`${this.baseUrl}/${id}`);
  }

  create(payload: ProductPayload): Observable<{ data: Product }> {
    return this.http.post<{ data: Product }>(this.baseUrl, payload);
  }

  update(id: number, payload: ProductPayload): Observable<{ data: Product }> {
    return this.http.put<{ data: Product }>(`${this.baseUrl}/${id}`, payload);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
