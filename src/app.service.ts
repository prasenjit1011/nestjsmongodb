import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {"msg":'Nestjs Lambda API Server Setup : '+(new Date).getMilliseconds()};
  }
}
