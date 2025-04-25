import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('test_route')
  handleMessage(data: any) {
    console.log('📥 Rabitmq Subscriber Received Msg : ', data);
    return { ack: true };
  }
}

