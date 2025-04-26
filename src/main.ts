// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

async function bootstrap() {
  console.log('PORT : ', process.env.PORT)
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      host: '127.0.0.1',
      port: 6379,
    },
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT);
  //console.clear();
}
bootstrap();