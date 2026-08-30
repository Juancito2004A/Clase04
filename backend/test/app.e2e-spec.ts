import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { HttpExceptionFilter } from '../src/common/http-exception.filter';

describe('Product CRUD (e2e)', () => {
  let app: INestApplication;
  let createdId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true
      })
    );
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /health checks the application and PostgreSQL', async () => {
    const response = await request(app.getHttpServer()).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.database).toBe('connected');
  });

  it('GET /api returns application information', async () => {
    const response = await request(app.getHttpServer()).get('/api');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('crud-angular-nest');
  });

  it('POST /api/products rejects invalid data', async () => {
    const response = await request(app.getHttpServer()).post('/api/products').send({
      name: 'ab',
      price: -10,
      stock: -1
    });
    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  it('POST /api/products creates a product', async () => {
    const response = await request(app.getHttpServer()).post('/api/products').send({
      name: 'Laptop Lenovo Test',
      description: 'Producto de prueba',
      price: 2499.99,
      stock: 12
    });
    expect(response.status).toBe(201);
    expect(response.body.data.name).toBe('Laptop Lenovo Test');
    createdId = response.body.data.id;
  });

  it('GET /api/products returns products', async () => {
    const response = await request(app.getHttpServer()).get('/api/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  it('GET /api/products/:id returns a product', async () => {
    const response = await request(app.getHttpServer()).get(`/api/products/${createdId}`);
    expect(response.status).toBe(200);
    expect(response.body.data.id).toBe(createdId);
  });

  it('GET /api/products/:id returns 404 for a missing product', async () => {
    const response = await request(app.getHttpServer()).get('/api/products/999999');
    expect(response.status).toBe(404);
  });

  it('PUT /api/products/:id updates a product', async () => {
    const response = await request(app.getHttpServer()).put(`/api/products/${createdId}`).send({
      name: 'Laptop Lenovo Pro',
      description: 'Actualizada',
      price: 2599.99,
      stock: 10
    });
    expect(response.status).toBe(200);
    expect(response.body.data.name).toBe('Laptop Lenovo Pro');
  });

  it('DELETE /api/products/:id removes a product', async () => {
    const response = await request(app.getHttpServer()).delete(`/api/products/${createdId}`);
    expect(response.status).toBe(204);
  });
});
