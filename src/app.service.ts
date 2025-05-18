import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Nestjs Lambda API Server with CICD :1709: ( tested 1039 : Okay) & CMD ( serverless deploy 1043 : Okay) '+(new Date).getMilliseconds();
  }
}
