import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { entities } from './auth/typeorm';

let envFilePath = '.env.development';

if (process.env.ENVIRONMENT == 'PRODUCTION') {
  envFilePath = '.env.production';
}

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFilePath,
    }),
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
