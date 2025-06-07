import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: process.env.API_HOST,
      port: process.env.API_CHILD_PORT_USER,
    },
  });
  await app.startAllMicroservices();
  await app.listen(process.env.API_CHILD_PORT_USER_LISTEN);


  console.clear();
  console.log('API_GATEWAY_PORT : ', process.env.API_GATEWAY_PORT)
  console.log('User Root Url : ', 'http://'+process.env.API_HOST+':'+process.env.API_CHILD_PORT_USER_LISTEN)
  console.log('User List : ', 'http://'+process.env.API_HOST+':'+process.env.API_GATEWAY_PORT+'/users');
}
bootstrap();
