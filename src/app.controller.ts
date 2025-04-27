
import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Use the MessagePattern decorator to listen to incoming messages
  @MessagePattern('process_data') // The pattern the microservice will use to listen
  async processData(@Payload() data: string) {
    return await this.appService.processData(data);
  }

  @Get()
  getHello(){
    return this.appService.getHello();
  }
}
