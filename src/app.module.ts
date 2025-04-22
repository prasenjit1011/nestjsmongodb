// src/app.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { PublisherService } from './publisher/publisher.service';
import { SubscriberService } from './subscriber/subscriber.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_CLIENT',
        transport: Transport.REDIS,
        options: {
          host: '127.0.0.1',
          port: 6379,
        },
      },
    ]),
  ],
  controllers: [AppController, SubscriberService],
  providers: [PublisherService],
})
export class AppModule {}
