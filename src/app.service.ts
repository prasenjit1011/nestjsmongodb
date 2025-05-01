import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda SNS API Server Setup 2340 : '+(new Date).getMilliseconds();
  }
}
