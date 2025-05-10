import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { AppModule } from './app.module';
import * as express from 'express';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  console.log('PORT : ', process.env.PORT)

  const app = await NestFactory.create(AppModule);

  app.use('/uploads', express.static('uploads'));
  app.use(graphqlUploadExpress({ maxFileSize: 10_000_000, maxFiles: 1 }));
  app.enableCors({  origin: '*',  credentials: true });

  await app.listen(process.env.PORT);

  console.clear();
  var dtd = new Date;
  var dtd1 = dtd.getHours()+':'+dtd.getMinutes()+':'+dtd.getSeconds();
  console.log('PORT :-- ', process.env.PORT, dtd1)
}
bootstrap();
