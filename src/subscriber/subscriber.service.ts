// src/subscriber/subscriber.service.ts
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class SubscriberService {
  constructor() {
    console.log('🔍 SubscriberService constructor loaded');
  }

  @EventPattern('message_channel')
  handleMessage(@Payload() data: any) {
    console.log('📩 Received Subscriber :', data);
  }
}
