import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda API Server Setup.. SNS 916 : '+(new Date).getMilliseconds();
  }
}
