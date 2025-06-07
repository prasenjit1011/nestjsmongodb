import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
    private readonly appService: AppService
  ) {}

  @Get('login')
  async login() {
    const result = await this.authService.send({ cmd: 'login' }, { username: 'admin', password: '1234' }).toPromise();
    return result;
  }

  @Get('users')
  async getUsers() {
    const users = await this.userService.send({ cmd: 'get_users' }, {}).toPromise();
    return users;
  }

  @Get()
  getHello() {
    const msg = 'Hello Master! '+(new Date).getMilliseconds();
    console.log(msg);
    return {msg};
  }
}
