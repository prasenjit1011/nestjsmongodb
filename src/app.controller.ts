import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_users' })
  users(data: any) {
    const msg = 'User Details '+(new Date).getMilliseconds();
    return { success: true, msg , user: data.username };
  }

  @Get()
  getHello() {
    const msg = 'Hello Child01! '+(new Date).getMilliseconds();
    console.log(msg);
    return {msg};
  }
}
