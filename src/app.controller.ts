import { Controller, Get } from '@nestjs/common';
import { RabbitMQService } from './websocket/rabbitmq-chat.service';

@Controller()
export class AppController {
  constructor(private rabbit: RabbitMQService) {}

  @Get()
  getHello(){
    let randNum = 'Random : '+(new Date).getMilliseconds();
    this.rabbit.publishRandNumber(randNum);
    return {"mymsg":randNum};
  }
}