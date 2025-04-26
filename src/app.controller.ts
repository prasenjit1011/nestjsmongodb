import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('RABBITMQ_SERVICE_A') private readonly client: ClientProxy,
  ) {}

  @MessagePattern('test_route')
  handleMessage(data: any) {
    console.clear();
    console.log();
    console.log('📥 RabbitMQ Subscriber Received Msg @ 3000:');
    console.log(data);
    return { ack: true };
  }

  @Get()
  async getHello() {    
    const message = 'Hi Rabbit MQ! From 3000 : ' + (new Date()).getMilliseconds();
    console.log('Sending Msg@3000')
    const result = await this.client.send('test_route', { message }).toPromise();
    return { message };
  }
}
