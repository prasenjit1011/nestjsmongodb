import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Controller()
export class AppController {
  constructor(@Inject('USER_SERVICE') private readonly userClient: ClientProxy) {}

  // @Get('users')
  // getUsers() {
  //   return this.userClient.send({ cmd: 'get_users' }, {});
  // }


  @Get('users')
  getUsers() {
    return this.userClient
      .send({ cmd: 'get_users' }, {})
      .pipe(
        timeout(5000),
        catchError(() => of({ message: 'User service not available' }))
      );
  }
}


