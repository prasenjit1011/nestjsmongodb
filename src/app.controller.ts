import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PinoLogger } from 'nestjs-pino';

@Controller()
export class AppController {
  //constructor(private readonly appService: AppService) {}
  constructor(private readonly logger: PinoLogger) {}

  @Get()
  getHello(): string {
    return 'Hello';
    //return this.appService.getHello();
  }

  @Get('/pinochk')
  getPinochk(@Query() query: any): string {
    const y = query?.age
    const x = 10/y;
    console.log(x);
    this.logger.error('Hello endpoint hit');
    return `HEllo Pino : ${x} ==>  ${y} ==> `+(new Date).getMilliseconds();
  }

  @Get('/error-test')
  errorTest() {
    this.logger.error('Something went wrong here!');
    //throw 
    throw new Error('Test Error!');
  }


}
