import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  database: process.env.DB_NAME || 'test_db',
  username: process.env.DB_USERNAME || 'admin',
  password: process.env.DB_PASSWORD || '123',
  synchronize: false,
  autoLoadEntities: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  logging: true,
  logger: 'advanced-console',
};
