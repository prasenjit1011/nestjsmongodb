import { Controller, Get } from '@nestjs/common';
import { RabbitMQService } from './websocket/rabbitmq-chat.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private rabbit: RabbitMQService
  ) {}

  @Get()
  getHello(){
    let randNum = 'Random : '+(new Date).getMilliseconds();
    this.rabbit.publishRandNumber(randNum);
    return {"mymsg":randNum};
  }
}
