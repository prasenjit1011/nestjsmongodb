import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('test_route')
  handleMessage(data: any) {
    console.log('📥 Received in nestjsmongo : ', data);
    return { ack: true };
  }

  @Get()
  getHello(){
      const msg = 'Rabbit MQ from nestjsmongodb! '+(new Date).getMilliseconds();
      return msg;
  }
}

