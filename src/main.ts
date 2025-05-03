import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { join } from 'path';

async function bootstrap() {
  dotenv.config(); // Load .env before anything else
  console.log('PORT : ', process.env.PORT)
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);

  console.log(join(__dirname, '..', 'public', 'video.mp4'))
}
bootstrap();
