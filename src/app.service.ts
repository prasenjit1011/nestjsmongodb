import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda API Server Setup.. SNS 857-2247 : '+(new Date).getMilliseconds();
  }
}
