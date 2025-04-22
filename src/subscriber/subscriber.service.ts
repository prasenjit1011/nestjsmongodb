// src/subscriber/subscriber.service.ts
import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class SubscriberService {
  constructor() {
    console.log('🔍 SubscriberService constructor loaded');
  }

  //MessagePattern Or EventPattern : will be called
  @MessagePattern('message_channel')
  handleRedisMessage(data: any) {
    console.log('📩 Redis Subscriber Received msg using MessagePattern nestjs mongo:', data);
    return `Ack: ${data}`;
  }

  @EventPattern('message_channel')
  handleMessage(@Payload() data: any) {
    console.log('📩 Redis Subscriber Received msg using EventPattern nestjs mongo :', data);
  }
}
