import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda API Server Setup.... Action 01-17052025--2247 : '+(new Date).getMilliseconds();
  }
}
