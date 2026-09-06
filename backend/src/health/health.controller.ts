import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { DataSource } from 'typeorm';

interface HealthResponse {
  status: 'ok' | 'error';
  database: 'connected' | 'disconnected';
}

@Controller('health')
export class HealthController {
  constructor(private readonly dataSource: DataSource) {}

  @Get()
  async health(): Promise<HealthResponse> {
    try {
      await this.dataSource.query('SELECT 1');
      return {
        status: 'ok',
        database: 'connected'
      };
    } catch {
      throw new HttpException(
        {
          status: 'error',
          database: 'disconnected'
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
