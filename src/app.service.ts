import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda API Server Setup 01 : 943 : '+(new Date).getMilliseconds();
  }
}
