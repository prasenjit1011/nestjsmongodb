// app.controller.ts
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('test-topic')
  handleKafkaMessage(@Payload() message: any) {
    console.log('📨 Received Kafka message:', message.value);
  }
}
