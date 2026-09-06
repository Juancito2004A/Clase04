import { ConfigService } from '@nestjs/config';

export function getDatabaseConfig(config: ConfigService) {
  return {
    type: 'postgres' as const,
    host: config.get<string>('DB_HOST', 'localhost'),
    port: Number(config.get('DB_PORT', 5433)),
    username: config.get<string>('DB_USER', 'products_user'),
    password: config.get<string>('DB_PASSWORD'),
    database: config.get<string>('DB_NAME', 'products_db'),
    synchronize: config.get<string>('DB_SYNC', 'true') === 'true'
  };
}

export function getJwtSecret(config: ConfigService): string {
  const secret = config.get<string>('JWT_SECRET');
  if (!secret) {
    throw new Error('JWT_SECRET is required. Copy .env.example to .env and set a value.');
  }
  return secret;
}
