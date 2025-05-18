import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs lambda_01_cicd_04 : 20 '+(new Date).getMilliseconds();
  }
}
