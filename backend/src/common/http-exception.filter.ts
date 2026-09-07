import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger
} from '@nestjs/common';
import { Response } from 'express';

interface ExceptionBody {
  message?: string | string[];
  error?: string;
  status?: string;
  database?: string;
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();

    if (exception instanceof HttpException) {
      this.writeHttpException(response, exception);
      return;
    }

    this.logger.error('Unhandled exception', exception instanceof Error ? exception.stack : exception);
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: 'Internal server error'
    });
  }

  private writeHttpException(response: Response, exception: HttpException): void {
    const status = exception.getStatus();
    const payload = exception.getResponse();

    if (typeof payload !== 'object' || payload === null) {
      response.status(status).json({ error: String(payload) });
      return;
    }

    const body = payload as ExceptionBody;
    if (body.status && body.database) {
      response.status(status).json({
        status: body.status,
        database: body.database
      });
      return;
    }

    const details = Array.isArray(body.message) ? body.message : undefined;
    response.status(status).json({
      error: this.resolveMessage(body, details),
      details
    });
  }

  private resolveMessage(body: ExceptionBody, details?: string[]): string {
    if (details) {
      return 'Invalid product data';
    }
    if (typeof body.message === 'string') {
      return body.message;
    }
    return body.error ?? 'Error';
  }
}
