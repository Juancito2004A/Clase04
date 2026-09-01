import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller('health')
export class HealthController {
  constructor(private readonly dataSource: DataSource) {}

  @Get()
  async health() {
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
