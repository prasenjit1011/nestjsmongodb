import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda API Server Setup. CICD. SNS 937 : '+(new Date).getMilliseconds();
  }
}
