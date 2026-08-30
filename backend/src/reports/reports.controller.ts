import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ReportsService } from './reports.service';

@Controller('api/reports')
@UseGuards(AuthGuard)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('summary')
  async summary() {
    return { data: await this.reportsService.summary() };
  }

  @Get('search')
  async search(@Query('q') term: string) {
    const query = term || '';
    return { data: await this.reportsService.searchUnsafe(query) };
  }
}
