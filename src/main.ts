import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
//import { AppService } from './app.service';

async function bootstrap() {
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

  // Trigger sendMessage (e.g., on startup)
  // const appService = app.get(AppService);
  // const res = await appService.sendMessage();
  console.log('Message sent. Response:');

  await app.listen(3001);
  console.log('🚀 App is listening on port 3001');
}
bootstrap();

