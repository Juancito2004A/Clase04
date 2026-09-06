import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { Product } from './product.entity';

const PRODUCT_NOT_FOUND = 'Product not found';

export interface ProductResponse {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

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
        SAMPLE_PRODUCTS.map((item) => this.productsRepository.create(item))
      );
    }
  }

  async findAll(): Promise<ProductResponse[]> {
    const products = await this.productsRepository.find({ order: { id: 'ASC' } });
    return products.map((product) => this.serialize(product));
  }

  async findOne(id: number): Promise<ProductResponse> {
    return this.serialize(await this.getEntityOrThrow(id));
  }

  async create(payload: ProductDto): Promise<ProductResponse> {
    const product = this.productsRepository.create();
    this.applyPayload(product, payload);
    const saved = await this.productsRepository.save(product);
    return this.serialize(saved);
  }

  async update(id: number, payload: ProductDto): Promise<ProductResponse> {
    const product = await this.getEntityOrThrow(id);
    this.applyPayload(product, payload);
    const saved = await this.productsRepository.save(product);
    return this.serialize(saved);
  }

  async remove(id: number): Promise<void> {
    const result = await this.productsRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException(PRODUCT_NOT_FOUND);
    }
  }

  private applyPayload(product: Product, payload: ProductDto): void {
    product.name = payload.name.trim();
    product.description = payload.description?.trim() || null;
    product.price = payload.price;
    product.stock = payload.stock;
  }

  private async getEntityOrThrow(id: number): Promise<Product> {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(PRODUCT_NOT_FOUND);
    }
    return product;
  }

  private serialize(product: Product): ProductResponse {
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
