import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3003;
  app.setGlobalPrefix('api');
  app.use(
    session({
      cookie: {
        maxAge: 86400000, // 60000 (milliseconds) * 60 (minutes) * 24 (hours) = 1 day
      },
      secret: 'session-top-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser());
  app.use(helmet());
  app.enableCors();

  // await app.listen(PORT);
  // app.enableCors({
  //   origin: ['http://localhost:3000'],
  //   credentials: true,
  // });

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
}
bootstrap();
