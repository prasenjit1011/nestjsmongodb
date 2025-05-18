import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda API Server Setup.. SNS 925 : '+(new Date).getMilliseconds();
  }
}
