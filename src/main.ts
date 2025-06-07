import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load .env before anything else
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_GATEWAY_PORT);

  console.clear();
  console.log('API_GATEWAY_PORT : ', process.env.API_GATEWAY_PORT)
  console.log('Root Url : ', 'http://'+process.env.API_HOST+':'+process.env.API_GATEWAY_PORT)
  console.log('User List : ', 'http://'+process.env.API_HOST+':'+process.env.API_GATEWAY_PORT+'/users')
}
bootstrap();
