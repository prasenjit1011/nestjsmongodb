import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
//import { PinoLoggerService } from './plugin/pino.logger';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  dotenv.config(); // Load .env before anything else
  console.log('PORT : ', process.env.PORT)
  const app = await NestFactory.create(AppModule);

  // Set up Pino logger globally
  app.useLogger(app.get(Logger));

  await app.listen(process.env.PORT);
}
bootstrap();


