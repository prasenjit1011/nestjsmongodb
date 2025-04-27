import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';


async function bootstrap() {
  dotenv.config(); // Load .env before anything else
  console.log('PORT : ', process.env.PORT)
  const app = await NestFactory.create(AppModule);

  // Kafka microservice setup
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:7572'], // Kafka broker address
      },
      consumer: {
        groupId: 'nestjs-group', // Consumer group ID
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT);
  console.log('Microservice is running on http://localhost:', process.env.PORT);
}


bootstrap();
