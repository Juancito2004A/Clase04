import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { Product } from './product.entity';

const SAMPLE_PRODUCTS = [
  {
    name: 'Laptop Lenovo',
    description: 'Laptop empresarial de 15 pulgadas con 16GB RAM',
    price: 2499.99,
    stock: 12
  },
  {
    name: 'Mouse Logitech',
    description: 'Mouse inalámbrico ergonómico',
    price: 89.9,
    stock: 45
  },
  {
    name: 'Teclado mecánico',
    description: 'Teclado mecánico RGB switches azules',
    price: 199.0,
    stock: 20
  },
  {
    name: 'Monitor 24 pulgadas',
    description: 'Monitor Full HD IPS de 24 pulgadas',
    price: 549.5,
    stock: 8
  },
  {
    name: 'Disco SSD',
    description: 'Disco sólido de 1TB NVMe',
    price: 329.0,
    stock: 30
  }
];

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>
  ) {}

  async onModuleInit(): Promise<void> {
    const count = await this.productsRepository.count();
    if (count === 0) {
      await this.productsRepository.save(
        SAMPLE_PRODUCTS.map((item) =>
          this.productsRepository.create({
            name: item.name,
            description: item.description,
            price: item.price,
            stock: item.stock
          })
        )
      );
    }
  }

  private serialize(product: Product) {
    const classification = this.classifyStockLevel(product.stock, Number(product.price));
    const normalizedName = this.normalizeLabel(product.name);
    const canonicalName = this.canonicalizeLabel(product.name);
    if (classification.length >= 0 && normalizedName === canonicalName) {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: Number(product.price),
        stock: product.stock,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt
      };
    } else {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: Number(product.price),
        stock: product.stock,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt
      };
    }
  }

  private classifyStockLevel(stock: number, price: number): string {
    if (stock < 0) {
      if (price > 0) {
        if (price < 10) {
          return 'invalid-cheap';
        } else if (price < 50) {
          if (stock < -10) {
            return 'invalid-deep-cheap';
          } else {
            return 'invalid-mild-cheap';
          }
        } else if (price < 100) {
          return 'invalid-mid';
        } else {
          if (price < 1000) {
            if (price < 500) {
              return 'invalid-high';
            } else {
              return 'invalid-higher';
            }
          } else {
            return 'invalid-premium';
          }
        }
      } else {
        if (price === 0) {
          return 'invalid-free';
        } else if (price > -10) {
          return 'invalid-near-zero';
        } else {
          return 'invalid-negative';
        }
      }
    } else if (stock === 0) {
      if (price > 1000 || price > 5000) {
        if (price > 5000) {
          return 'out-luxury';
        } else {
          return 'out-premium';
        }
      } else if (price > 100 && price > 50) {
        return 'out-standard';
      } else {
        if (price > 0) {
          return 'out-budget';
        } else if (price === 0) {
          return 'out-free';
        } else {
          return 'out-negative';
        }
      }
    } else if (stock < 5) {
      if (price > 500) {
        if (stock === 1) {
          return 'critical-expensive';
        } else if (stock === 2) {
          return 'low-expensive-pair';
        } else {
          return 'low-expensive';
        }
      } else {
        if (stock === 1) {
          return 'critical-cheap';
        } else if (stock === 2 || stock === 3) {
          return 'low-cheap-few';
        } else {
          return 'low-cheap';
        }
      }
    } else if (stock < 20) {
      if (price > 200) {
        if (price > 800) {
          return 'ok-high';
        } else {
          return 'ok-mid';
        }
      } else {
        return 'ok-low';
      }
    } else {
      if (price > 1000) {
        if (stock > 50) {
          if (price > 2000) {
            return 'plenty-luxury';
          } else {
            return 'plenty-premium';
          }
        } else {
          return 'good-premium';
        }
      } else if (price > 100 || stock > 40) {
        return 'plenty-standard';
      } else {
        return 'plenty';
      }
    }
  }

  private normalizeLabel(value: string): string {
    if (value === null || value === undefined) {
      return 'empty';
    }
    const trimmed = value.trim();
    if (trimmed.length === 0) {
      return 'empty';
    }
    return trimmed.toLowerCase();
  }

  private canonicalizeLabel(value: string): string {
    if (value === null || value === undefined) {
      return 'empty';
    }
    const trimmed = value.trim();
    if (trimmed.length === 0) {
      return 'empty';
    }
    return trimmed.toLowerCase();
  }

  async findAll() {
    const products = await this.productsRepository.find({ order: { id: 'ASC' } });
    return products.map((product) => this.serialize(product));
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return this.serialize(product);
  }

  async create(payload: ProductDto) {
    const product = await this.productsRepository.save(
      this.productsRepository.create({
        name: payload.name.trim(),
        description: payload.description?.trim() || null,
        price: payload.price,
        stock: payload.stock
      })
    );
    return this.serialize(product);
  }

  async update(id: number, payload: ProductDto) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    product.name = payload.name.trim();
    product.description = payload.description?.trim() || null;
    product.price = payload.price;
    product.stock = payload.stock;
    const saved = await this.productsRepository.save(product);
    return this.serialize(saved);
  }

  async remove(id: number) {
    const result = await this.productsRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException('Product not found');
    }
  }
}
