import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(){
    let key = 'nest22';
    let value = 'timenow-'+(new Date).getTime();
    const result1 = await this.appService.setKey(key, value);
    
    
    const result2 = await this.appService.getKey(key);
    return { result1, result2 };
  }
}
