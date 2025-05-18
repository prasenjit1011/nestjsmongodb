import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda API Server Setup....hello 843843 Action 01-17052025--2247 : '+(new Date).getMilliseconds();
  }
}
