// src/publisher/publisher.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PublisherService {
  constructor(@Inject('REDIS_CLIENT') private client: ClientProxy) {}

  async publishMessage() {

    this.client.emit('message_channel', {
      user: 'Test',
      msg: 'Hello',
    });
    

    // const payload = { user: 'Prasenjit', msg: 'Hello '+(new Date()).getMilliseconds() };
    // this.client.emit('message_channel', payload); // fire and forget
  }
}

