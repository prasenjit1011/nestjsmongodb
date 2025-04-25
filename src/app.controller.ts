import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
    constructor(private readonly appService: AppService) {}
    @Get()
    getHello(){
        const message = 'Hello Rabbit MQ ! ' + (new Date()).getMilliseconds();
        this.appService.sendMessage(message);
        return {message};
    }
}
