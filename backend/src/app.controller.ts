import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get()
  info() {
    return {
      name: 'crud-angular-nest',
      version: '1.0.0',
      stack: 'Angular + NestJS + PostgreSQL',
      endpoints: [
        'GET /health',
        'GET /api',
        'GET /api/products',
        'GET /api/products/:id',
        'POST /api/products',
        'PUT /api/products/:id',
        'DELETE /api/products/:id',
        'GET /api/reports/summary',
        'GET /api/reports/search',
        'GET /api/auth/me'
      ]
    };
  }
}
