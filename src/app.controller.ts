// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { PublisherService } from './publisher/publisher.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly publisherService: PublisherService) {
    console.clear();
  }

  @EventPattern('message_channel')
  test(@Payload() data: any) {
    console.log('🚀 test_channel received:', data);
  }

  @Get('publish')
  async triggerPublish() {    
    await this.publisherService.publishMessage();
    return { status: 'Message Published to Redis channel!' };
  }
}
