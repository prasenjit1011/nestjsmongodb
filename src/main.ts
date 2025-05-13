import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


async function bootstrap() {
  dotenv.config();
  console.log('PORT : ', process.env.PORT)

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // Enable CORS
  app.enableCors({
    origin: '*', // or 'http://localhost:3001' to be specific
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // if you use cookies or Authorization headers
  });

  await app.listen(process.env.PORT ?? 3000);

  console.clear();
  var dtd = new Date;
  var dtd1 = dtd.getHours()+':'+dtd.getMinutes()+':'+dtd.getSeconds();
  console.log('PORT :-- ', process.env.PORT, dtd1)

}
bootstrap();
