import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create NestJS HTTP API server
  const app = await NestFactory.create(AppModule);
  
  // Set the port for the HTTP API server (non-microservice)
  await app.listen(3000);  // Default HTTP port for your API
  
  // Create the microservice (Redis transport)
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,  // Redis transport
    options: {
      host: '127.0.0.1',         // Redis host
      port: 6379,                // Redis port
      retryAttempts: 5,          // Retry attempts on failure
      retryDelay: 3000,          // Delay between retries in ms
    },
  });

  await microservice.listen();
  console.log('🚀 Microservice is running on Redis transport at port 6379');
}
bootstrap();
