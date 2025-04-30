import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';
import { FaqService } from './faqs/faq.service';


@Controller('/')
export class AppController {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
    private readonly faqService: FaqService,
    private readonly appService: AppService
  ) {}


  async onModuleInit() {
    await this.client.connect(); // Ensures connection before use
  }


  @MessagePattern('test_route')
  handleMessage(data: any) {
    //console.clear();
    console.log();
    console.log('📥 RabbitMQ Subscriber Received Msg @ ', process.env.PORT, ' : ');
    console.log(data);

    const answer = "Faq World "+data?.message;
    const faqData = {question:"Hello", answer};
    this.faqService.create(faqData);

    return { ack: true };
  }


  @Get()
  async getHello(){
      const message = 'Hello Rabbit MQ ! From '+process.env.PORT+' : ' + (new Date()).getMilliseconds();
      const result  = await firstValueFrom(this.client.send('test_route', { message }));
      //const result1 = await this.client.send('test_route', { message }).toPromise();
      return {message};
  }
}
