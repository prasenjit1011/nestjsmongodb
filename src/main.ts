import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { LoggingInterceptor, ResponseDateInterceptor } from './logging.interceptor';

async function bootstrap() {
  dotenv.config(); // Load .env before anything else
  console.log('PORT : ', process.env.PORT)
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new ResponseDateInterceptor());

  await app.listen(process.env.PORT);
}
bootstrap();
