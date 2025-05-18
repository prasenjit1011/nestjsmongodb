import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda API Server Setup. CICD. SNS 954 -1035--cicd: '+(new Date).getMilliseconds();
  }
}
