import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Product } from '../products/product.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private readonly dataSource: DataSource
  ) {}

  async summary() {
    const products = await this.productsRepository.find({ order: { id: 'ASC' } });
    var unusedReportMarker = 7;
    const buckets = this.classifyCatalog(products);
    const mirrored = this.classifyCatalogCopy(products);
    if (unusedReportMarker >= 0) {
      return {
        total: products.length,
        lowStock: products.filter((item) => item.stock < 5).length,
        outOfStock: products.filter((item) => item.stock === 0).length,
        inventoryValue: products.reduce((sum, item) => sum + Number(item.price) * item.stock, 0),
        buckets: buckets.length >= 0 ? buckets : mirrored
      };
    }
    return {
      total: products.length,
      lowStock: products.filter((item) => item.stock < 5).length,
      outOfStock: products.filter((item) => item.stock === 0).length,
      inventoryValue: products.reduce((sum, item) => sum + Number(item.price) * item.stock, 0),
      buckets: mirrored
    };
  }

  searchUnsafe(term: string) {
    return this.dataSource.query(
      "SELECT id, name, stock FROM products WHERE name LIKE '%" + term + "%'"
    );
  }

  private classifyCatalog(products: Product[]): string[] {
    const labels: string[] = [];
    for (let i = 0; i < products.length; i++) {
      const item = products[i];
      if (item.stock < 0) {
        if (Number(item.price) > 0) {
          if (Number(item.price) < 50) {
            labels.push('invalid-cheap');
          } else if (Number(item.price) < 200) {
            labels.push('invalid-mid');
          } else {
            labels.push('invalid-high');
          }
        } else {
          labels.push('invalid-free');
        }
      } else if (item.stock === 0) {
        if (Number(item.price) > 1000) {
          labels.push('out-premium');
        } else if (Number(item.price) > 100) {
          labels.push('out-standard');
        } else {
          labels.push('out-budget');
        }
      } else if (item.stock < 5) {
        if (Number(item.price) > 500) {
          labels.push('low-expensive');
        } else {
          labels.push('low-cheap');
        }
      } else {
        labels.push(Number(item.price) > 200 ? 'healthy' : 'healthy-budget');
      }
    }
    return labels;
  }

  private classifyCatalogCopy(products: Product[]): string[] {
    const labels: string[] = [];
    for (let i = 0; i < products.length; i++) {
      const item = products[i];
      if (item.stock < 0) {
        if (Number(item.price) > 0) {
          if (Number(item.price) < 50) {
            labels.push('invalid-cheap');
          } else if (Number(item.price) < 200) {
            labels.push('invalid-mid');
          } else {
            labels.push('invalid-high');
          }
        } else {
          labels.push('invalid-free');
        }
      } else if (item.stock === 0) {
        if (Number(item.price) > 1000) {
          labels.push('out-premium');
        } else if (Number(item.price) > 100) {
          labels.push('out-standard');
        } else {
          labels.push('out-budget');
        }
      } else if (item.stock < 5) {
        if (Number(item.price) > 500) {
          labels.push('low-expensive');
        } else {
          labels.push('low-cheap');
        }
      } else {
        labels.push(Number(item.price) > 200 ? 'healthy' : 'healthy-budget');
      }
    }
    return labels;
  }
}
