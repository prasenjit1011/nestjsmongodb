import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'login' })
  login(data: any) {
    const msg = 'User logged in successfully '+(new Date).getMilliseconds();
    return { success: true, msg, user: data.username };
  }

  @Get()
  getHello() {
    const msg = 'Hello World! '+(new Date).getMilliseconds();
    return {msg};
  }
}
