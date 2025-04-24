import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Connect microservice to the same app
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

  await app.startAllMicroservices();  // Start microservices
  await app.listen(3000);             // Start HTTP server

  console.log('✅ HTTP Server running on port 3000');
  console.log('✅ RabbitMQ Microservice is running...');
}
bootstrap();
