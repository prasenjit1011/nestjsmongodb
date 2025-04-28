import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  dotenv.config(); // Load .env before anything else
  console.log('PORT : ', process.env.PORT)
  const app = await NestFactory.create(AppModule);


  // Enable global validation
  app.useGlobalPipes(new ValidationPipe());

  // Swagger setup
  const options = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description for Product and Player modules')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document); // 'api' is the route to access Swagger UI


  await app.listen(process.env.PORT);
}
bootstrap();
