import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const payload = exception.getResponse();
      if (typeof payload === 'object' && payload !== null) {
        const body = payload as {
          message?: string | string[];
          error?: string;
          status?: string;
          database?: string;
        };
        if (body.status && body.database) {
          response.status(status).json({
            status: body.status,
            database: body.database
          });
          return;
        }
        const details = Array.isArray(body.message) ? body.message : undefined;
        response.status(status).json({
          error: details
            ? 'Invalid product data'
            : (typeof body.message === 'string' ? body.message : body.error) || 'Error',
          details
        });
        return;
      }
      response.status(status).json({ error: String(payload) });
      return;
    }

    this.logger.error('Unhandled exception', exception instanceof Error ? exception.stack : exception);
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: 'Internal server error'
    });
  }
}
