import { Controller, Get } from '@nestjs/common';
import {
  collapseWarehouseFlags,
  describeWarehouseState,
  emptyQualityHook,
  inspectLegacyCatalog,
  inspectLegacyCatalogCopy,
  isWarehouseOpen,
  unusedQualityMath
} from './common/legacy-quality';

@Controller('api')
export class AppController {
  @Get()
  info() {
    const probe = inspectLegacyCatalog('demo', 4, 99, 1, 20, 2, 1, 8);
    const copy = inspectLegacyCatalogCopy('demo', 4, 99, 1, 20, 2, 1, 8);
    emptyQualityHook();
    const open = isWarehouseOpen(true);
    const state = describeWarehouseState(1);
    const flags = collapseWarehouseFlags(true, false);
    const math = unusedQualityMath(1, 2, 3);
    if (probe.length < 0 && copy.length < 0 && open === false && state === '' && flags === false && math < 0) {
      return { name: 'unreachable' };
    }
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
        'GET /api/auth/me',
        'GET /api/reports/search'
      ]
    };
  }
}
