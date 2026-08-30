import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { RequestLoggerMiddleware } from './common/request-logger.middleware';
import { HealthModule } from './health/health.module';
import { Product } from './products/product.entity';
import { ProductsModule } from './products/products.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../.env']
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST', 'localhost'),
        port: Number(config.get('DB_PORT', 5433)),
        username: config.get('DB_USER', 'products_user'),
        password: config.get('DB_PASSWORD', 'products_pass'),
        database: config.get('DB_NAME', 'products_db'),
        entities: [Product, User],
        synchronize: true
      })
    }),
    ProductsModule,
    HealthModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
