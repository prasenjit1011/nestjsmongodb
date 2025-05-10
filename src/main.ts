import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load .env before anything else
  console.log('PORT : ', process.env.PORT)
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);

  console.clear();
  var dtd = new Date;
  var dtd1 = dtd.getHours()+':'+dtd.getMinutes()+':'+dtd.getSeconds();
  console.log('PORT :-- ', process.env.PORT, dtd1)
}
bootstrap();
