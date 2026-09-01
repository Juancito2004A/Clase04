import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Product } from '../products/product.entity';

const LOW_STOCK_THRESHOLD = 5;

export type StockStatus = 'out' | 'low' | 'ok';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>
  ) {}

  async summary() {
    const products = await this.productsRepository.find({ order: { id: 'ASC' } });

    return {
      total: products.length,
      lowStock: products.filter((item) => item.stock > 0 && item.stock < LOW_STOCK_THRESHOLD).length,
      outOfStock: products.filter((item) => item.stock === 0).length,
      inventoryValue: products.reduce((sum, item) => sum + Number(item.price) * item.stock, 0),
      statuses: products.map((item) => this.resolveStockStatus(item.stock))
    };
  }

  async search(term: string) {
    const query = term.trim();
    if (!query) {
      return [];
    }

    return this.productsRepository.find({
      where: { name: ILike(`%${query}%`) },
      select: { id: true, name: true, stock: true },
      order: { name: 'ASC' },
      take: 20
    });
  }

  private resolveStockStatus(stock: number): StockStatus {
    if (stock <= 0) {
      return 'out';
    }
    if (stock < LOW_STOCK_THRESHOLD) {
      return 'low';
    }
    return 'ok';
  }
}
