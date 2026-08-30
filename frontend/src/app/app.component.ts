import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  selected: Product | null = null;
  editingId: number | null = null;
  loading = false;
  error = '';
  form = {
    name: '',
    description: '',
    price: '',
    stock: ''
  };

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.error = '';
    this.productService.list().subscribe({
      next: (response) => {
        this.products = response.data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.error || 'No se pudieron cargar los productos';
        this.loading = false;
      }
    });
  }

  save(): void {
    this.loading = true;
    this.error = '';
    const payload = {
      name: this.form.name,
      description: this.form.description,
      price: Number(this.form.price),
      stock: Number(this.form.stock)
    };

    const request = this.editingId
      ? this.productService.update(this.editingId, payload)
      : this.productService.create(payload);

    request.subscribe({
      next: () => {
        this.resetForm();
        this.loadProducts();
      },
      error: (err) => {
        this.error = Array.isArray(err.error?.details)
          ? err.error.details.join('. ')
          : err.error?.error || 'Datos inválidos';
        this.loading = false;
      }
    });
  }

  edit(product: Product): void {
    this.editingId = product.id;
    this.form = {
      name: product.name,
      description: product.description || '',
      price: String(product.price),
      stock: String(product.stock)
    };
  }

  details(id: number): void {
    this.loading = true;
    this.productService.get(id).subscribe({
      next: (response) => {
        this.selected = response.data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.error || 'Producto no encontrado';
        this.loading = false;
      }
    });
  }

  remove(id: number): void {
    this.loading = true;
    this.productService.remove(id).subscribe({
      next: () => {
        if (this.editingId === id) {
          this.resetForm();
        }
        if (this.selected?.id === id) {
          this.selected = null;
        }
        this.loadProducts();
      },
      error: (err) => {
        this.error = err.error?.error || 'No se pudo eliminar';
        this.loading = false;
      }
    });
  }

  resetForm(): void {
    this.editingId = null;
    this.form = { name: '', description: '', price: '', stock: '' };
  }
}
