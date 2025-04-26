import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load .env before anything else
  // Create the main app (HTTP server)
  const app = await NestFactory.create(AppModule);

  // Connect RabbitMQ as a microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'test_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  // Start the microservice
  await app.startAllMicroservices();
  console.log('✅ RabbitMQ subscriber is running...');

  console.log('PORT : ', process.env.PORT)
  // Start the HTTP server
  await app.listen(3000); //3001
  console.log('🚀 App is listening on port 3000');
}

bootstrap();

